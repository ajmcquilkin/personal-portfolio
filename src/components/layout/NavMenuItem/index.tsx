import Link from 'next/link';
import { useRouter } from 'next/router';

export interface NavMenuItemProps {
  content: string,
  href: string
}

const NavMenuItem = ({ content, href }: NavMenuItemProps): JSX.Element => {
  const router = useRouter();
  const active = href === router.pathname;

  return (
    <div>
      <div />
      <Link href={href}>
        <a>{content}</a>
      </Link>
      <div />
    </div>
  );
};

export default NavMenuItem;
