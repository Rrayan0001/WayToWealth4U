import type { ReactNode } from "react";

export type ServiceFeatureIconName =
  | "termLoan"
  | "workingCapital"
  | "businessExpansion"
  | "equipmentFinancing"
  | "invoiceFinancing"
  | "machineryLoan"
  | "loanAmount"
  | "loanVariants"
  | "loanTenure"
  | "interestFreeDays"
  | "rewardsCashback"
  | "preApprovedLimit"
  | "preAdmissionSanction"
  | "taxBenefit"
  | "fastApproval"
  | "minimalDocumentation"
  | "flexibleRepayment"
  | "attractiveRates"
  | "flexibleEligibility"
  | "highLoanValue"
  | "diverseProperty"
  | "businessPersonalNeeds"
  | "instantPersonalLoan";

type ServiceFeatureIconProps = {
  icon: ServiceFeatureIconName;
  title?: string;
};

const frameFill = "rgba(31, 153, 89, 0.07)";
const deepGreen = "#0A3B24";
const emerald = "#147A46";
const gold = "#D6A92C";
const paleGold = "rgba(214, 169, 44, 0.18)";

const strokeProps = {
  fill: "none",
  stroke: deepGreen,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 4,
};

const accentStrokeProps = {
  fill: "none",
  stroke: gold,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 4,
};

function IconFrame({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      style={{
        color: deepGreen,
        display: "block",
        filter: "drop-shadow(0 12px 18px rgba(10, 59, 36, 0.12))",
        height: "100%",
        width: "100%",
      }}
    >
      <rect x="10" y="10" width="76" height="76" rx="24" fill={frameFill} />
      <circle cx="72" cy="24" r="6" fill={paleGold} />
      <circle cx="72" cy="24" r="3" fill={gold} />
      <path d="M22 74H74" stroke={emerald} strokeOpacity="0.14" strokeWidth="4" />
      {children}
    </svg>
  );
}

function getIconArtwork(icon: ServiceFeatureIconName) {
  switch (icon) {
    case "termLoan":
      return (
        <>
          <path {...strokeProps} d="M30 22H52L66 36V68C66 71.314 63.314 74 60 74H30C26.686 74 24 71.314 24 68V28C24 24.686 26.686 22 30 22Z" />
          <path {...strokeProps} d="M52 22V36H66" />
          <path {...strokeProps} d="M36 46H52" />
          <path {...strokeProps} d="M36 52H52" />
          <path {...accentStrokeProps} d="M40 46C40 52 45 54 50 54H40L52 66" />
        </>
      );

    case "workingCapital":
      return (
        <>
          <ellipse cx="48" cy="62" rx="15" ry="6" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...strokeProps} d="M33 56V62C33 65.314 39.716 68 48 68C56.284 68 63 65.314 63 62V56" />
          <path {...strokeProps} d="M33 50V56C33 59.314 39.716 62 48 62C56.284 62 63 59.314 63 56V50" />
          <path {...strokeProps} d="M32 40C36 33 43 29 51 29" />
          <path {...strokeProps} d="M51 29L47 25" />
          <path {...strokeProps} d="M51 29L48 34" />
          <path {...accentStrokeProps} d="M64 39C61 34 56 31 50 30" />
          <path {...accentStrokeProps} d="M64 39L69 38" />
          <path {...accentStrokeProps} d="M64 39L63 33" />
        </>
      );

    case "businessExpansion":
      return (
        <>
          <path {...strokeProps} d="M28 68V54" />
          <path {...strokeProps} d="M40 68V46" />
          <path {...strokeProps} d="M52 68V36" />
          <path {...accentStrokeProps} d="M26 52L40 38L50 48L68 30" />
          <path {...accentStrokeProps} d="M60 30H68V38" />
        </>
      );

    case "equipmentFinancing":
      return (
        <>
          <rect x="24" y="40" width="48" height="24" rx="8" {...strokeProps} />
          <circle cx="40" cy="52" r="7" {...strokeProps} />
          <path {...strokeProps} d="M40 42V38M40 66V62M30 52H26M54 52H50M33 45L30 42M47 45L50 42M33 59L30 62M47 59L50 62" />
          <path {...accentStrokeProps} d="M28 34H68" />
          <path {...accentStrokeProps} d="M54 28H66V40" />
        </>
      );

    case "invoiceFinancing":
      return (
        <>
          <path {...strokeProps} d="M30 22H58L68 32V70C68 72.209 66.209 74 64 74H30C27.791 74 26 72.209 26 70V26C26 23.791 27.791 22 30 22Z" />
          <path {...strokeProps} d="M58 22V32H68" />
          <path {...strokeProps} d="M36 42H58M36 50H58M36 58H48" />
          <circle cx="58" cy="60" r="10" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M54 56H62M54 60H61M54 56C54 60 57 61 60 61H54L62 67" />
        </>
      );

    case "machineryLoan":
      return (
        <>
          <path {...strokeProps} d="M24 66H72" />
          <path {...strokeProps} d="M28 66V48L40 42V50L52 44V52L64 46V66" />
          <circle cx="58" cy="30" r="8" {...strokeProps} />
          <path {...strokeProps} d="M58 18V14M58 46V42M46 30H42M74 30H70M50 22L47 19M66 38L69 41M50 38L47 41M66 22L69 19" />
          <circle cx="36" cy="66" r="5" fill={paleGold} stroke={gold} strokeWidth="3" />
          <circle cx="58" cy="66" r="5" fill={paleGold} stroke={gold} strokeWidth="3" />
        </>
      );

    case "loanAmount":
      return (
        <>
          <rect x="22" y="42" width="52" height="26" rx="8" {...strokeProps} />
          <path {...strokeProps} d="M22 50H74" />
          <path {...strokeProps} d="M58 55H66" />
          <circle cx="44" cy="30" r="11" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M40 26H48M40 31H48M40 26C40 31 44 32 47 32H40L48 38" />
        </>
      );

    case "loanVariants":
      return (
        <>
          <rect x="24" y="34" width="28" height="36" rx="7" {...strokeProps} />
          <rect x="34" y="26" width="28" height="36" rx="7" fill={frameFill} stroke={emerald} strokeWidth="4" />
          <rect x="44" y="18" width="28" height="36" rx="7" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...strokeProps} d="M31 46H45M41 38H55M51 30H65" />
        </>
      );

    case "loanTenure":
      return (
        <>
          <rect x="22" y="24" width="52" height="46" rx="10" {...strokeProps} />
          <path {...strokeProps} d="M22 36H74" />
          <path {...strokeProps} d="M34 18V30M62 18V30" />
          <circle cx="58" cy="56" r="12" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M58 49V57L63 61" />
          <path {...strokeProps} d="M34 46H42M34 54H46" />
        </>
      );

    case "interestFreeDays":
      return (
        <>
          <rect x="22" y="24" width="52" height="42" rx="10" {...strokeProps} />
          <path {...strokeProps} d="M22 36H74" />
          <path {...strokeProps} d="M34 18V30M62 18V30" />
          <circle cx="48" cy="50" r="11" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M48 44V50L53 53" />
          <path {...strokeProps} d="M36 56L60 44" />
        </>
      );

    case "rewardsCashback":
      return (
        <>
          <rect x="26" y="36" width="44" height="30" rx="8" {...strokeProps} />
          <path {...strokeProps} d="M26 48H70" />
          <path {...strokeProps} d="M48 36V66" />
          <path {...strokeProps} d="M38 30C38 26.686 40.686 24 44 24C47.314 24 50 26.686 50 30V36H38V30Z" />
          <path {...strokeProps} d="M46 30C46 26.686 48.686 24 52 24C55.314 24 58 26.686 58 30V36H46V30Z" />
          <path {...accentStrokeProps} d="M72 50C72 59 64 66 55 66" />
          <path {...accentStrokeProps} d="M55 66L58 61" />
          <path {...accentStrokeProps} d="M55 66L59 70" />
        </>
      );

    case "preApprovedLimit":
      return (
        <>
          <rect x="20" y="30" width="56" height="34" rx="10" {...strokeProps} />
          <path {...strokeProps} d="M20 42H76" />
          <path {...strokeProps} d="M30 54H42M48 54H58" />
          <circle cx="64" cy="28" r="10" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M60 28L63 31L69 25" />
        </>
      );

    case "preAdmissionSanction":
      return (
        <>
          <path {...strokeProps} d="M20 34L48 22L76 34L48 46L20 34Z" />
          <path {...strokeProps} d="M30 40V50C30 54.418 38.059 58 48 58C57.941 58 66 54.418 66 50V40" />
          <path {...accentStrokeProps} d="M76 34V48" />
          <circle cx="76" cy="52" r="6" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M73 52L75 54L79 50" />
        </>
      );

    case "taxBenefit":
      return (
        <>
          <path {...strokeProps} d="M30 22H58L68 32V70C68 72.209 66.209 74 64 74H30C27.791 74 26 72.209 26 70V26C26 23.791 27.791 22 30 22Z" />
          <path {...strokeProps} d="M58 22V32H68" />
          <circle cx="40" cy="46" r="4" fill={paleGold} stroke={gold} strokeWidth="3" />
          <circle cx="56" cy="60" r="4" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M56 42L40 64" />
          <path {...strokeProps} d="M34 58H46" />
        </>
      );

    case "fastApproval":
      return (
        <>
          <circle cx="48" cy="52" r="18" {...strokeProps} />
          <path {...strokeProps} d="M48 52V42M48 52L56 57" />
          <path {...strokeProps} d="M40 24H56" />
          <path {...strokeProps} d="M48 24V34" />
          <circle cx="64" cy="34" r="9" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M60 34L63 37L68 31" />
        </>
      );

    case "minimalDocumentation":
      return (
        <>
          <path {...strokeProps} d="M30 22H58L68 32V70C68 72.209 66.209 74 64 74H30C27.791 74 26 72.209 26 70V26C26 23.791 27.791 22 30 22Z" />
          <path {...strokeProps} d="M58 22V32H68" />
          <path {...strokeProps} d="M36 44H58M36 52H52" />
          <circle cx="56" cy="60" r="10" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M51 60L55 64L62 56" />
        </>
      );

    case "flexibleRepayment":
      return (
        <>
          <circle cx="48" cy="48" r="18" {...strokeProps} />
          <path {...strokeProps} d="M48 37V48L56 53" />
          <path {...accentStrokeProps} d="M32 28C37 23 43 20 50 20" />
          <path {...accentStrokeProps} d="M50 20L46 16" />
          <path {...accentStrokeProps} d="M50 20L47 25" />
          <path {...accentStrokeProps} d="M64 68C59 73 53 76 46 76" />
          <path {...accentStrokeProps} d="M46 76L50 80" />
          <path {...accentStrokeProps} d="M46 76L49 71" />
        </>
      );

    case "attractiveRates":
      return (
        <>
          <circle cx="36" cy="38" r="5" fill={paleGold} stroke={gold} strokeWidth="3" />
          <circle cx="60" cy="58" r="5" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...strokeProps} d="M58 36L38 60" />
          <path {...accentStrokeProps} d="M70 28V48H50" />
          <path {...accentStrokeProps} d="M50 48L58 56" />
        </>
      );

    case "flexibleEligibility":
      return (
        <>
          <path {...strokeProps} d="M48 18L68 26V42C68 56 59 67 48 72C37 67 28 56 28 42V26L48 18Z" />
          <circle cx="48" cy="38" r="7" {...strokeProps} />
          <path {...strokeProps} d="M38 54C40 49 44 46 48 46C52 46 56 49 58 54" />
          <circle cx="64" cy="58" r="8" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M60 58L63 61L68 55" />
        </>
      );

    case "highLoanValue":
      return (
        <>
          <path {...strokeProps} d="M26 44L48 28L70 44" />
          <path {...strokeProps} d="M32 42V68H64V42" />
          <path {...strokeProps} d="M44 68V54H52V68" />
          <ellipse cx="68" cy="62" rx="10" ry="4" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M58 56C61 52 65 50 70 50C76 50 80 53 80 57" />
          <path {...accentStrokeProps} d="M58 62C61 66 65 68 70 68C76 68 80 65 80 61" />
        </>
      );

    case "diverseProperty":
      return (
        <>
          <path {...strokeProps} d="M18 68H78" />
          <path {...strokeProps} d="M22 50L34 40L46 50V68H22V50Z" />
          <path {...strokeProps} d="M50 34H66V68H50V34Z" />
          <path {...strokeProps} d="M70 46L78 42V68H70V46Z" />
          <path {...strokeProps} d="M54 42H62M54 50H62M54 58H62" />
          <path {...accentStrokeProps} d="M28 58H34" />
        </>
      );

    case "businessPersonalNeeds":
      return (
        <>
          <rect x="20" y="40" width="24" height="20" rx="4" {...strokeProps} />
          <path {...strokeProps} d="M26 40V34H38V40" />
          <path {...strokeProps} d="M52 48L64 38L76 48" />
          <path {...strokeProps} d="M56 46V64H72V46" />
          <circle cx="48" cy="52" r="6" fill={paleGold} stroke={gold} strokeWidth="3" />
          <path {...accentStrokeProps} d="M44 52H34" />
          <path {...accentStrokeProps} d="M52 52H62" />
        </>
      );

    case "instantPersonalLoan":
      return (
        <>
          <rect x="24" y="44" width="48" height="24" rx="8" {...strokeProps} />
          <path {...strokeProps} d="M24 52H72" />
          <path {...strokeProps} d="M58 57H66" />
          <path {...accentStrokeProps} d="M46 20L36 42H48L42 58L60 34H48L54 20H46Z" />
        </>
      );

    default:
      return null;
  }
}

export function ServiceFeatureIcon({ icon, title }: ServiceFeatureIconProps) {
  return <IconFrame title={title}>{getIconArtwork(icon)}</IconFrame>;
}
