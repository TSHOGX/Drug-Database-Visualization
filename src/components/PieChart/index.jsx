import { ResponsivePie } from '@nivo/pie'
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { pieData } from "../../data/pieData"


const PieChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <ResponsivePie
            data={pieData}
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
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            // colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.grey[100]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            enableArcLabels={true}
            arcLabelsRadiusOffset={0.5}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [["darker", 2]],
            }}
            // defs={[
            //     {
            //         id: 'dots',
            //         type: 'patternDots',
            //         background: 'inherit',
            //         color: 'rgba(255, 255, 255, 0.3)',
            //         size: 4,
            //         padding: 1,
            //         stagger: true
            //     },
            //     {
            //         id: 'lines',
            //         type: 'patternLines',
            //         background: 'inherit',
            //         color: 'rgba(255, 255, 255, 0.3)',
            //         rotation: -45,
            //         lineWidth: 6,
            //         spacing: 10
            //     }
            // ]}
            // fill={[
            //     {
            //         match: {
            //             id: 'ruby'
            //         },
            //         id: 'dots'
            //     },
            //     {
            //         match: {
            //             id: 'c'
            //         },
            //         id: 'dots'
            //     },
            //     {
            //         match: {
            //             id: 'go'
            //         },
            //         id: 'dots'
            //     },
            //     {
            //         match: {
            //             id: 'python'
            //         },
            //         id: 'dots'
            //     },
            //     {
            //         match: {
            //             id: 'scala'
            //         },
            //         id: 'lines'
            //     },
            //     {
            //         match: {
            //             id: 'lisp'
            //         },
            //         id: 'lines'
            //     },
            //     {
            //         match: {
            //             id: 'elixir'
            //         },
            //         id: 'lines'
            //     },
            //     {
            //         match: {
            //             id: 'javascript'
            //         },
            //         id: 'lines'
            //     }
            // ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 10,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: colors.grey[100],
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: colors.grey[200]
                            }
                        }
                    ]
                }
            ]}
        />
    );
};

export default PieChart