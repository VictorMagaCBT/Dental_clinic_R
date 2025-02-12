import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { to, subject, contactData } = await req.json()

    // Format the email content
    const emailContent = `
      Novo pedido de contato:
      
      Nome: ${contactData.name}
      Email: ${contactData.email}
      Telefone: ${contactData.phone}
      País: ${contactData.country}
      Data Preferida: ${contactData.preferred_date}
      Assunto: ${contactData.subject}
      
      Mensagem:
      ${contactData.message}
    `

    // Send email using Supabase's built-in SMTP service
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DentalCare <no-reply@dentalcare.pt>',
        to: [to],
        subject: subject,
        text: emailContent,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error('Failed to send email')
    }

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})