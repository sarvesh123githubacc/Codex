import React from 'react'
import CommunityCard from '../components/CommunityCard'
// import ActivityFeed from '../components/ActivityFeed'
// import EventCard from '../components/EventCard'
// import MessageBox from '../components/MessageBox'
// import RecommendationCard from '../components/RecommendationCard'

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold">Welcome to Your Health Dashboard</h2>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <CommunityCard />
        {/* <MessageBox />
        <EventCard /> */}
      </div>

      {/* <div className="mt-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <ActivityFeed />
      </div> */}

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Recommended Communities</h3>
        {/* <RecommendationCard /> */}
      </div>
    </div>
  )
}

export default Dashboard
