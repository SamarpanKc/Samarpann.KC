import { FolderArchive } from "@/components/works/FolderArchive";
import { WorksShowcase } from "@/components/works/WorksShowcase";

export function Works() {
  return (
    <section id="works" aria-labelledby="works-title" className="panel-wrap py-10">
      <div className="panel flex flex-col gap-20 overflow-hidden lg:gap-[120px]">
        <WorksShowcase />
        <FolderArchive />
      </div>
    </section>
  );
}
