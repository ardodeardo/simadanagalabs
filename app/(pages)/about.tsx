import Section from "@/app/components/Section";
import { Heading2, Paragraph } from "@/app/components/Typography";

function About() {
  return (
    <Section id="about">
      <div className="space-y-5">
        <Heading2>A glimpse of a journey.</Heading2>
        <Paragraph>
          Driven by creativity, a Computer Science background naturally led to
          front-end development—the sweet spot where technology meets design.
          Nearly a decade later, it remains a space for growth, curiosity, and
          continuous learning.
        </Paragraph>
      </div>
    </Section>
  );
}

export default About;
