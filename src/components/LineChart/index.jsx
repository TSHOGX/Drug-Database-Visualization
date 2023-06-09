import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { yearcnt as lineData} from "../../data/yearcnt";

const LineChart = ({ focused, setFocusedNode, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
    <ResponsiveLine
        data={lineData.filter(item => selected.includes(String(item.id)))}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100],
                    },
                },
                legend: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1,
                    },
                    text: {
                        fill: colors.grey[100],
                    },
                },
            },
            legends: {
                text: {
                    fill: colors.grey[100],
                },
            },
            tooltip: {
                container: {
                    background: colors.primary[400],
                    color: colors.grey[100],
                },
            },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{
            type: 'time',
            format: '%Y',
            useUTC: false,
            precision: 'day',
        }}
        xFormat="time:%Y"
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            format: '%Y',
            tickValues: 'every 2 years',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'year',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'number',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false} // added
        enableGridY={false} // added
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    );
};

export default LineChart