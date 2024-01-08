import React from "react";
import ProjectMenu from "../components/project-menu/project-menu";
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex flex-col">
      <ProjectMenu />
      <div className="flex-1">{children}</div>
    </div>
  );
}
