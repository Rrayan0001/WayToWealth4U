export type InquiryFormValues = {
  name: string;
  mobile: string;
  email: string;
  service: string;
  amount: string;
  message: string;
};

function compactValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function getWhatsAppPhoneNumber(phone: string) {
  return phone.replace(/\D/g, "");
}

export function buildInquiryMessage(values: InquiryFormValues, source: string) {
  const name = compactValue(values.name);
  const mobile = compactValue(values.mobile);
  const email = compactValue(values.email);
  const service = compactValue(values.service);
  const amount = compactValue(values.amount);
  const message = values.message.trim();

  const lines = [
    "Hello WealthRise Capitals,",
    "",
    "*New Inquiry*",
    `*Name:* ${name}`,
    `*Mobile:* ${mobile}`,
    `*Email:* ${email}`,
  ];

  if (service) {
    lines.push(`*Service Needed:* ${service}`);
  }

  if (amount) {
    lines.push(`*Amount Required:* ${amount}`);
  }

  lines.push("*Message:*");
  lines.push(message);
  lines.push("");
  lines.push(`*Source:* ${source}`);

  return lines.join("\n");
}

export function buildWhatsAppInquiryUrl(phone: string, values: InquiryFormValues, source: string) {
  const whatsappPhone = getWhatsAppPhoneNumber(phone);

  if (!whatsappPhone) {
    return null;
  }

  const text = buildInquiryMessage(values, source);

  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`;
}
