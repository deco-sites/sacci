import ProfileCard from "../components/ui/ProfileCard.tsx";
import TechStack from "../components/ui/TechStack.tsx";

interface Props {
  /**
   * @title Nome
   * @description Seu nome completo
   */
  name: string;

  /**
   * @title Título/Cargo
   * @description Ex: Desenvolvedor Full Stack
   */
  title: string;

  /**
   * @title Descrição
   * @description Uma breve apresentação sobre você
   * @format textarea
   */
  description: string;

  /**
   * @title Avatar
   * @description URL da sua foto de perfil
   * @format image-uri
   */
  avatar?: string;

  /**
   * @title Localização
   * @description Cidade onde você está
   */
  location?: string;

  /**
   * @title Email
   * @description Seu email para contato
   */
  email?: string;

  /**
   * @title GitHub
   * @description Seu username do GitHub
   */
  github?: string;

  /**
   * @title LinkedIn
   * @description Seu username do LinkedIn
   */
  linkedin?: string;

  /**
   * @title Tecnologias
   * @description Lista das tecnologias que você domina
   */
  technologies: string[];

  /**
   * @title Estilo das Tecnologias
   * @description Como as tecnologias serão exibidas
   */
  techDisplayStyle?: "grid" | "inline";

  /**
   * @title Cor de Fundo
   * @description Cor de fundo da seção
   */
  backgroundColor?: string;
}

export default function About({
  name,
  title,
  description,
  avatar,
  location,
  email,
  github,
  linkedin,
  technologies,
  techDisplayStyle = "grid",
  backgroundColor = "#0f172a",
}: Props) {
  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Profile Card */}
        <ProfileCard
          name={name}
          title={title}
          description={description}
          avatar={avatar}
          location={location}
          email={email}
          github={github}
          linkedin={linkedin}
        />

        {/* Tech Stack */}
        {technologies.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-inter font-bold text-white mb-6 text-center">
              Tecnologias que domino
            </h3>
            <TechStack
              technologies={technologies}
              variant={techDisplayStyle}
            />
          </div>
        )}
      </div>
    </section>
  );
}
