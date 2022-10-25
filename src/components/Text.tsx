interface TextProps {
  children: React.ReactNode;
}

interface HeaderProps {
  children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return <p>{children}</p>;
};

export const Header = ({ children }: HeaderProps) => {
  return <h3 className="text-[36px]">{children}</h3>;
};
