import FaqItem from "./faq-item";
import Link from "./link";

export default function FaqSection() {
  return (
    <div className="space-y-4">
      <FaqItem
        title="O uso do serviço é gratuito?"
        description={
          <p>
            Sim. O uso do serviço é gratuito e open-source. Você pode conferir o
            código fonte do projeto no{" "}
            <Link href="https://github.com/LuanRoger/stock-notion">GitHub</Link>
            .
          </p>
        }
      />
      <FaqItem
        title="O que posso fazer com o código fonte?"
        description={
          <p>
            Você pode contribuir para o projeto, usar o código fonte para criar
            o seu próprio serviço, ou até mesmo hospedar o serviço em seu
            próprio servidor. O código é licenciado sob a licença{" "}
            <Link href="https://opensource.org/licenses/MIT">MIT</Link>
          </p>
        }
      />
      <FaqItem
        title="É oferecido algum tipo de suporte?"
        description={
          <p>
            O serviço é ativamente mantido e atualizado. Contudo, não oferecemos
            suporte personalizado para o serviço, mas você dar sugestões de
            melhorias ou relatar erros no repósitorio do projeto no{" "}
            <Link href="https://github.com/LuanRoger/stock-notion/issues">
              GitHub
            </Link>
            . Dessa forma, vamos conseguir evoluir o serviço para atender as
            necessidades da comunidade como um todo.
          </p>
        }
      />
      <FaqItem
        title="De onde vêm os dados?"
        description={
          <p>
            As informações são públicas extraídas do site{" "}
            <Link href="https://statusinvest.com.br">Status Invest</Link>.
          </p>
        }
      />
      <FaqItem
        title="Precisso de uma conta para usar?"
        description={
          <p>
            Não. Você pode acessar o serviço sem precisar de uma conta. Contudo,
            você ainda precissa de uma conta no Notion para que os dados sejam
            atualizados.
          </p>
        }
      />
      <FaqItem
        title="Precisso obrigatóriamente usar o template provido pelo Stock?"
        description={
          <p>
            Não. Você pode criar o seu próprio template no Notion e usar o
            serviço com ele. Contudo, o template provido pelo Stock já está
            configurado para funcionar com o serviço. Se optar por criar o seu
            template ou banco de dados, você deve seguir a estrutura de campos e
            propriedades do template padrão, modificando o também o mapeamento
            dos campos se necessário.
          </p>
        }
      />
      <FaqItem
        title="As atualizações são automáticas?"
        description={
          <p>
            Não. As atualizações são feitas manualmente, sempre que quiser
            atualizar sua base de dados com as ultimas informações, você devera
            acessar o site novamente e seguir com o fluxo de atualização.
          </p>
        }
      />
      <FaqItem
        title="As atualizações são executadas instantaneamente?"
        description={
          <p>
            Não. Quando você clica em &quot;Atualizar&quot;, na verdade você faz
            uma solicitação para que o serviço atualize os indicadores dos seus
            ativos na base de dados do Notion. O tempo de uma atualização pode
            variar de acordo com a quantidade de ativos que você possui, mas em
            média, pode levar até 20 segundos para começar a atulizar.
          </p>
        }
      />
      <FaqItem
        title="Requisitei uma atualização, mas os dados não foram atualizados, o que fazer?"
        description={
          <p>
            Isso pode acontecer por diversos motivos. Os principais são:
            <br />
            1. O serviço está temporariamente indisponível.
            <br />
            2. Problemas de permissão da integração com sua base de dados no
            Notion. Verifique se você autorizou a integração corretamente.
            <br />
            3. Há um ativo na sua base de dados do Notion que não foi encontrado
            no site fonte. Verifique se o ativo está correto e se ele existe no{" "}
            <Link href="https://statusinvest.com.br">site fonte</Link>.
            <br />
            Se você verificou todos esses pontos e o problema persistir, você
            pode relatar o erro no{" "}
            <Link href="https://github.com/LuanRoger/stock-notion/issues">
              GitHub
            </Link>
            .
          </p>
        }
      />
      <FaqItem
        title="Vou receber notificações de atualizações da minha requisição de atualização?"
        description={<p>Neste momento não há notificações de atualizações.</p>}
      />
      <FaqItem
        title="Quais são os tipos de ativos suportados?"
        description={
          <p>
            Atualmente é suportados apenas Fundos Imobiliários (FIIs) e Fundo de
            Investimento nas Cadeias Produtivas Agroindustriais (FIAGRO). Caso
            tenha algum ativo na sua base de dados do Notion que não seja um
            desses tipos, ela não será atualizada ou ocorrerá um error. Se você
            deseja que outros tipos de ativos sejam suportados, você pode
            relatar a sugestão no{" "}
            <Link href="https://github.com/LuanRoger/stock-notion/issues">
              GitHub
            </Link>
            .
          </p>
        }
      />
      <FaqItem
        title="Há limite de quantas requisições de atualização posso fazer?"
        description={
          <p>
            Sim. Para evitar abusos, há um limite de 1 requisição de atualização
            a cada 1 minuto(s). Atualizações feitas antes desse tempo não serão
            processadas.
          </p>
        }
      />
      <FaqItem
        title="Há limite de quantas ativos são atualizados por requisição?"
        description={
          <p>
            Sim. Há um limite de 50 ativos por requisição de atualização. Se sua
            base de dados do Notion possui mais de 50 ativos, os ativos depois
            do 50º não serão atualizados.
          </p>
        }
      />
    </div>
  );
}
