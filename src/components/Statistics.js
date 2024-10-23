interface StatisticsProps {
  wins: number;
  losses: number;
  draws: number;
}

const Statistics = ({ wins, losses, draws }: StatisticsProps) => {
  return (
    <div className="statistics">
      <div className="stat-card">
        <h3>Wins</h3>
        <p>{wins}</p>
      </div>
      <div className="stat-card">
        <h3>Losses</h3>
        <p>{losses}</p>
      </div>
      <div className="stat-card">
        <h3>Draws</h3>
        <p>{draws}</p>
      </div>
    </div>
  );
};

export default Statistics;
