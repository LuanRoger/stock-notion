import Link from "./link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import ProductIcon from "./product-icon";
import FooterLink from "./footer-link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-5 text-muted-foreground font-mono text-sm px-6 lg:px-16 mt-16">
      <div className="inline-flex items-center gap-2">
        <ProductIcon className="size-8" textClassName="text-xl" />
        <h1 className="text-3xl font-serif tracking-tight">Stock</h1>
      </div>

      <div className="flex flex-col w-fit gap-2">
        <FooterLink href="/terms/privacy-policies">
          Política de privacidade
        </FooterLink>
        <FooterLink href="">Template</FooterLink>
        <FooterLink href="">Perfil do criador</FooterLink>
      </div>

      <div className="flex justify-between w-full">
        <span>
          Criado por{" "}
          <Link
            className="hover:underline"
            href="www.linkedin.com/in/luan-roger"
            target="_blank"
          >
            Luan Roger
          </Link>
        </span>
        <span>
          <Link
            href="https://github.com/LuanRoger/stock-notion"
            target="_blank"
          >
            <SiGithub />
          </Link>
          <Link href=""></Link>
        </span>
      </div>
    </footer>
  );
}
