import Link from "next/link";
import { CategoryLink } from "@components/layouts/Head";
import { CategoryMenu, IcoLink } from "./styles";

function index() {
  const CategoryMenuItem = [...CategoryLink];
  return (
    <CategoryMenu>
      {CategoryMenuItem.map((el, i) => (
        <Link
          href={
            el.url === "oneday" || el.url === "month" || el.title === "VOD"
              ? `/${el.url}`
              : `/view/${el.url}`
          }
          key={i}
          passHref
        >
          <IcoLink num={i}>{el.title}</IcoLink>
        </Link>
      ))}
    </CategoryMenu>
  );
}

export default index;
