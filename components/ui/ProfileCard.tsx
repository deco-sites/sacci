interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  avatar?: string;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

export default function ProfileCard({
  name,
  title,
  description,
  avatar,
  location,
  email,
  github,
  linkedin,
}: ProfileCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-white">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start">
          {avatar
            ? (
              <img
                src={avatar}
                alt={name}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
              />
            )
            : (
              <div className="w-32 h-32 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-400">
                  {name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-inter font-bold mb-2 text-white">
            {name}
          </h1>
          <h2 className="text-xl text-gray-300 mb-4 font-medium">
            {title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {description}
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
            {location && (
              <span className="flex items-center gap-2">
                <span>📍</span>
                {location}
              </span>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span>📧</span>
                {email}
              </a>
            )}
            {github && (
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span>🐙</span>
                GitHub
              </a>
            )}
            {linkedin && (
              <a
                href={`https://linkedin.com/in/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span>💼</span>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
