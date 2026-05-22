import HowToUseItem from "./how-to-use-item";
import Link from "./link";

export default function HowToUseSection() {
  return (
    <div>
      <HowToUseItem
        title="Criar integração do Notion"
        step={1}
        description={
          <p>
            Você precisa criar uma integração no Notion (interna). Para isso,
            acesse{" "}
            <Link
              href="https://www.notion.so/profile/integrations"
              target="_blank"
            >
              Notion Integrations
            </Link>
            , clique em &quot;Nova integração&quot; e preencha os campos
            necessários. Dê nome a integração, associe ao espaço de trabalho que
            deseja usar e defina o tipo da integração como &quot;Interna&quot;
            <br />
            Copie o token da integração e cole na variável de ambiente{" "}
            <code>NOTION_INTEGRATION_SECRET</code> da aplicação{" "}
            <code>server</code>
          </p>
        }
      />
      <HowToUseItem
        title="Criar banco de dados no Notion"
        step={2}
        description={
          <p>
            O Stock disponibiliza um template para você criar o banco de dados
            no Notion. Você pode acessar o template clicando{" "}
            <Link
              href="https://www.notion.com/pt/templates/stock-base"
              target="_blank"
            >
              aqui
            </Link>
            .
            <br />
            Lembre-se de criar o banco de dados no mesmo espaço de trabalho que
            a integração que você criou no passo 1.
          </p>
        }
      />
      <HowToUseItem
        title="Conectar integração"
        step={3}
        description={
          <p>
            Após criar o banco de dados, você deve conectar a integração que
            criou no passo 1 ao banco de dados. Para isso, clique em
            <code>...</code> (botão dos três pontinhos) no canto superior
            direito do banco de dados, selecione &quot;Conexões&quot; depois
            selecione a integração que você criou no passo 1.
          </p>
        }
      />
      <HowToUseItem
        title="Executar o Stock"
        step={4}
        description={
          <p>
            Após criar o banco de dados e conectar a integração, você pode
            executar o Stock. Para isso, copie o ID do banco de dados e cole na
            seção &quot;Banco de dados do Notion&quot; do Stock. Depois, clique
            no botão &quot;Atualziar&quot; e aguarde a atualização dos dados.
          </p>
        }
      />
    </div>
  );
}
