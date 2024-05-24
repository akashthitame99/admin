
import React from "react";

export const PATH: Record<string, string> = {
  "create-user": "Create User",
  "edit-user": "Edit User",
  "manage-users": "Manage Users",
  "manage-buildings": "Manage Buildings",
  "manage-media": "Manage Media",
  "manage-data": "Manage Data",
  "manage-permission": "Manage Permission",
};

export const Breadcrumb = () => {
  const pathName = "usePathname()";
  const paths = pathName?.split("/").filter((path) => PATH[path]);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex gap-2 text-[#5F5F5F] text-sm">
        {paths.map((path, index) => {
          return (
            <li key={path} className="flex gap-2">
              {index === paths.length - 1 ? (
                <span>{PATH[path]}</span>
              ) : (
                <>
                  <a href={`/${paths?.slice(0, index + 1).join("/")}`}>
                    {PATH[path]}
                  </a>
                  {index < paths.length - 1 && <div>{">"}</div>}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
