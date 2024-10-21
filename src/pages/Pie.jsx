import React from 'react';
import { Box, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaLandmark } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundCirclePlugin = {
  id: 'backgroundCircle',
  beforeDraw: (chart) => {
    const { ctx, chartArea, width, height } = chart;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const outerRadius = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top) / 2;
    const innerRadius = outerRadius * 0.7; // Match the 70% cutout of the main chart

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI, true);
    ctx.fillStyle = '#E2E8F0';
    ctx.fill();
    ctx.restore();
  }
};

const InvestmentPieChart = () => {
  const totalInvestment = 1065000;
  const investments = [
    { value: 800000, color: '#48BB78', label: 'Class A' },
    { value: 200000, color: '#ED8936', label: 'Class B' },
    { value: 65000, color: 'transparent', label: 'Other' },
  ];

  const data = {
    labels: investments.map(i => i.label),
    datasets: [
      {
        data: investments.map(i => i.value),
        backgroundColor: investments.map(i => i.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed.toLocaleString()} NOK`;
          }
        }
      },
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <VStack align="center" spacing={4}>
      <Box position="relative" width="250px" height="250px">
        <Pie data={data} options={options} plugins={[backgroundCirclePlugin]} />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Icon as={FaLandmark} boxSize={6} mb={2} />
          <Text fontSize="md" fontWeight="medium" color="gray.600">
            Total investment
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="green.700">
            {totalInvestment.toLocaleString()} NOK
          </Text>
        </Box>
      </Box>

      <Box
        bg="gray.800"
        color="white"
        p={4}
        borderRadius="md"
        boxShadow="md"
        textAlign="left"
      >
        <Text fontWeight="bold">DYSTHE DESIGN AS</Text>
        <Text>Investment: {investments[0].value.toLocaleString()} NOK</Text>
        <HStack justify="space-between">
          <Text>Class A: 200</Text>
          <Text>Class B: 50</Text>
        </HStack>
        <Text mt={2} color="teal.300" cursor="pointer">
          Open company
        </Text>
      </Box>
    </VStack>
  );
};

export default InvestmentPieChart;
