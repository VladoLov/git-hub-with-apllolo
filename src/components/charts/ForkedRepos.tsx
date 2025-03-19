import { Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function ForkedRepos({
  repositories,
}: {
  repositories: Repository[];
}) {
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  /*  console.log(mostForkedRepos); */
  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#facd12", // Red color for the bars
    },
  } satisfies ChartConfig;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Fork Repos</h2>
      <ChartContainer config={chartConfig} className="w-full h-100">
        <BarChart accessibilityLayer data={mostForkedRepos}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="repo"
            tickLine={true}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
