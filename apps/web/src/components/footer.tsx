import Link from "./link";
import Image from "next/image";
import FooterLink from "./footer-link";
import ExtendedProductIcon from "./extended-product-icon";
import inLogo from "@/app/assets/in.png";
import lrLogo from "@/app/assets/lr-logo.png";
import ghLogo from "@/app/assets/gh-logo.png";
import { PRIMARY_BACKDROP_FILTER } from "@/constants";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-5 text-muted-foreground font-mono text-sm px-6 lg:px-16 mt-10">
      <ExtendedProductIcon className="w-fit" isLink />

      <div className="flex flex-col w-fit gap-2">
        <FooterLink href="/terms/privacy-policies">
          Política de privacidade
        </FooterLink>
        <FooterLink href="/terms/use-terms">Termos de uso</FooterLink>
        <FooterLink
          href="https://www.notion.com/pt/templates/stock-base"
          target="_blank"
        >
          Template
        </FooterLink>
        <FooterLink href="https://www.notion.com/pt/@luanroger" target="_blank">
          Perfil do criador
        </FooterLink>
      </div>

      <div className="flex items-center self-end gap-2">
        <Link href="https://www.linkedin.com/in/luanroger/">
          <Image
            src={inLogo}
            width={30}
            height={30}
            alt={"Logo do Linkedin"}
            className={PRIMARY_BACKDROP_FILTER}
          />
        </Link>
        <Link href="https://github.com/LuanRoger/stock-notion" target="_blank">
          <Image
            src={ghLogo}
            width={50}
            height={50}
            alt={"Logo do GitHub"}
            className={PRIMARY_BACKDROP_FILTER}
          />
        </Link>
        <Link href="https://portfolio.luanroger.dev">
          <Image
            src={lrLogo}
            width={40}
            height={40}
            alt={"Logo do Luan Roger"}
            className={PRIMARY_BACKDROP_FILTER}
          />
        </Link>
      </div>
    </footer>
  );
}
