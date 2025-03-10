import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Trophy, Users, BookOpen, Clock } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Stats data
  const stats = [
    { icon: <Trophy className="w-6 h-6 text-purple-600" />, label: 'Total Score', value: '450' },
    { icon: <Users className="w-6 h-6 text-purple-600" />, label: 'Class Rank', value: '5th' },
    { icon: <BookOpen className="w-6 h-6 text-purple-600" />, label: 'Courses', value: '8' },
    { icon: <Clock className="w-6 h-6 text-purple-600" />, label: 'Study Hours', value: '124' },
  ];

  // Progress data
  const progressData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ['#9333EA', '#E9D5FF', '#F3E8FF'],
        borderWidth: 0,
      },
    ],
  };

  // Performance data
  const performanceData = {
    labels: ['Math', 'Science', 'English', 'History', 'Physics', 'Chemistry'],
    datasets: [
      {
        label: 'Your Score',
        data: [85, 72, 90, 78, 88, 76],
        backgroundColor: '#9333EA',
      },
      {
        label: 'Class Average',
        data: [75, 68, 82, 74, 80, 72],
        backgroundColor: '#E9D5FF',
      },
    ],
  };

  // Study time data
  const studyTimeData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Study Hours',
        data: [4, 5, 3, 6, 4, 7, 3],
        borderColor: '#9333EA',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              {stat.icon}
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Progress */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Course Progress</h2>
          <div className="h-64">
            <Doughnut
              data={progressData}
              options={{
                cutout: '70%',
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Subject Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Subject Performance</h2>
          <div className="h-64">
            <Bar
              data={performanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                  },
                },
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Study Time Tracking */}
        <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Study Time Tracking</h2>
          <div className="h-64">
            <Line
              data={studyTimeData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;