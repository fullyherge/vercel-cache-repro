import { NoStore } from "./no-store";
import { Revalidate } from "./revalidate";

export async function generateStaticParams() {
  return [{ id: ["no-store"] }, { id: ["revalidate"] }];
}

export default async function Page({
  params,
}: {
  params: { id: "no-store" | "revalidate" };
}) {
  return (
    <div>{params.id[0] === "no-store" ? <NoStore /> : <Revalidate />}</div>
  );
}
