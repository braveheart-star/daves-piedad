import { Timeline } from "antd";

interface HistoryProps {
  type?: "left" | "alternate" | "right" | undefined;
  histories: {
    color?: string;
    period: string;
    company: string;
    other?: string;
    dot?: any;
  }[];
}
export const History = (props: HistoryProps) => {
  const { histories, type } = props;
  return (
    <Timeline
      mode={type ? type : "left"}
      items={histories.map((history) => ({
        color: history.color,
        dot: history.dot,
        children: (
          <div className="mt-4 ml-16 md:mt-6 md:flex md:space-x-12 md:pb-8">
            <h2 className="text-sm font-medium tracking-wider text-gray-600 ">
              {history.period}
            </h2>
            <div className="">
              <p className="my-4 font-serif text-lg text-gray-800 sm:text-xl md:text-2xl md:my-0">
                {history.company}
              </p>
              {history.other && (
                <p className="my-2 font-serif text-gray-600 sm:text-base ">
                  ( {history.other} )
                </p>
              )}
            </div>
          </div>
        ),
      }))}
    />
  );
};
