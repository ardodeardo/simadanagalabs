import { Fragment } from "react";

import Link from "next/link";

import Section from "@/app/components/Section";
import { Heading2, Paragraph } from "@/app/components/Typography";
import { Code, PersonStanding, ToyBrick, GitBranchPlus } from "lucide-react";

function Exploration() {
  return (
    <Section id="exploration">
      <div className="space-y-5">
        <Heading2>Never ending exploration.</Heading2>

        <div className="space-y-5">
          {[
            {
              icon: <Code size={24} />,
              title: <>Front-End Development</>,
              description: (
                <>
                  The primary playground where most of the time is spent.
                  Crafting clear components without overcomplicating things.
                </>
              ),
              stacks: [
                {
                  value: "https://www.typescriptlang.org",
                  label: "Typescript",
                },
                { value: "https://ui.shadcn.com", label: "Shadcn/ui" },
                { value: "https://nextjs.org", label: "Next.js" },
                { value: "https://vercel.com", label: "Vercel" },
              ],
            },
            {
              icon: <PersonStanding size={24} />,
              title: <>UI/UX Design</>,
              description: (
                <>
                  Not a full-time designer, yet equipped with a good design
                  sense and practical Figma skills to build visual concepts and
                  interfaces.
                </>
              ),
              stacks: [{ value: "https://www.figma.com", label: "Figma" }],
            },
            {
              icon: <ToyBrick size={24} />,
              title: <>End-to-End Project Cycle</>,
              description: (
                <>
                  Bridging ideas to reality, aligning product goals, and keeping
                  deliverables on track from day one.
                </>
              ),
              stacks: [
                {
                  value: "https://www.atlassian.com/software/jira",
                  label: "Jira",
                },
              ],
            },
            {
              icon: <GitBranchPlus size={24} />,
              title: <>Full-Stack Mindset</>,
              description: (
                <>
                  Realizing front-end alone is not enough, actively sharpening
                  back-end capabilities to build complete, full-fledged
                  products.
                </>
              ),
              stacks: [
                {
                  value: "https://www.typescriptlang.org",
                  label: "Typescript",
                },
                { value: "https://nextjs.org", label: "Next.js" },
                { value: "https://www.postgresql.org", label: "PostgreSQL" },
                { value: "https://vercel.com", label: "Vercel" },
              ],
            },
          ].map(({ icon, title, description, stacks }, index, arr) => {
            return (
              <Fragment key={index}>
                <div className="space-y-2">
                  {icon}

                  <div className="space-y-1">
                    <h3 className="text-base leading-[160%] font-semibold">
                      {title}
                    </h3>
                    <Paragraph>{description}</Paragraph>
                  </div>

                  <div className="flex items-center gap-x-2">
                    {stacks.map(({ value, label }, index, _arr) => {
                      return (
                        <Fragment key={index}>
                          <Link
                            href={value}
                            target="_blank"
                            className="text-xs text-[#0000FF]/32 hover:text-[#0000FF]/64 transition-colors ease-out"
                          >
                            {label}
                          </Link>

                          {_arr[index + 1] !== undefined && (
                            <span className="text-xs text-[#0000FF]/32">
                              {"//"}
                            </span>
                          )}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>

                {arr[index + 1] !== undefined && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="1"
                    viewBox="0 0 345 1"
                    preserveAspectRatio="none"
                    className="w-full"
                  >
                    <path
                      d="M0 0.5H345"
                      stroke="black"
                      strokeOpacity="0.24"
                      strokeDasharray="4 4"
                    />
                  </svg>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Exploration;
