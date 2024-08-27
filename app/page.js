import Link from "next/link";
import fs from "fs";
import path from "path";
import TextBorderAnimation from "@/components/text-border";

function getRoutes() {
  const appDirectory = path.join(process.cwd(), "app");

  const folders = fs.readdirSync(appDirectory).filter((folder) => {
    const isDirectory = fs
      .statSync(path.join(appDirectory, folder))
      .isDirectory();
    const isNotIgnored = !/^\(.*\)$/.test(folder);
    return isDirectory && isNotIgnored;
  });

  return folders;
}

export default function Home() {
  const routes = getRoutes();

  return (
    <nav className="flex flex-col gap-4 p-8">
      {routes.map((route) => (
        <Link
          key={route}
          href={`/${route}`}
          className="text-6xl font-bold max-w-fit"
        >
          <TextBorderAnimation text={route} />
        </Link>
      ))}
    </nav>
  );
}
