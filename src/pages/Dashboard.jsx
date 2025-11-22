import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-cont">
      <div style={{ marginBottom: "2rem" }}>Dashboard</div>
      <div className="search-cont">
        <img src="search.png" alt="search-icon" />
        <input
          type="text"
          name="ticketId"
          id="ticketId"
          placeholder="Search for ticket"
        />
      </div>
    </div>
  );
};
export default Dashboard;
