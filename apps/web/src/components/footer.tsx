import Link from "./link";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between text-muted-foreground font-mono text-sm">
      <span>
        Criado por{" "}
        <Link
          className="hover:underline"
          href="https://github.com/LuanRoger"
          target="_blank"
        >
          LuanRoger
        </Link>
      </span>
      <span>
        <Link href="https://github.com/LuanRoger/stock-notion" target="_blank">
          <SiGithub />
        </Link>
      </span>
    </footer>
  );
}
