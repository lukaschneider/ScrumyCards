import { GetServerSidePropsContext } from "next";

export const redirect: any = (
  { res }: GetServerSidePropsContext<any>,
  path: string
) => {
  res.writeHead(308, { Location: path });
  res.end();
  return {};
};
