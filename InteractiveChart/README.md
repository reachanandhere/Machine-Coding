# In this question, we need to a build an interactive bar chart similar to velocity charts we see in Atlassian's JIRA product.

# Functional Requirements
1. There should be a button that can be used to toggle the visibility of the chart.
2. Department data would be provided using which we need to draw a Bar chart where Y axis represents the no. of tickets and X axis represents the departments.
3. Each bar should be scaled based on the highest no. of tickets.
4. Each bar should have a tooltip that displays department name along with no. of tickets when a bar is hovered.
5. Bar's height should animate from 0 to final value upon entry and exit.


const CHART_DATA = [
    { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
    { id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
    { id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
    { id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
    { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
    {
      id: "dep-6",
      name: "Human Resourcing",
      ticketCount: 35,
      colour: "#1D1E33",
    },
    { id: "dep-7", name: "Events", ticketCount: 43, colour: "#E1CC4F" },
  ];

  