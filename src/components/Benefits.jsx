import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%]"
            >
              <div>
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
