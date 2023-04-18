import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { quarcnt } from "../../data/quarcnt";


const PieChart = ({ focused, setFocusedNode, selected, setSelected, year }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    if (focused in quarcnt) {
        var focusedData = quarcnt[focused];
        var data = focusedData["2014"]
        if (year !== null && focusedData[year] != null) {
            data = focusedData[year];
        } else {
            data = [{
                "id": "Data missing",
            }]
        }
    }else {
        data = [{
            "id": "Data missing",
        }]
    }

    return (
        <ResponsivePie
            data={data}
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
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 25,
                    translateY: 60,
                    itemsSpacing: 0,
                    itemWidth: 80,
                    itemHeight: 10,
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