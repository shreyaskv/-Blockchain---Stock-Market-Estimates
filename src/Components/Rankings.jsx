import React from 'react';

const Rankings = ({ candidates }) => { // Corrected destructuring here
  // Actual earnings and revenue for each company
  const actualEarningsPerShare = {
    Tesla: 4.73,
    Microsoft: 11.10,
    Google: 5.84
  };

  const actualRevenue = {
    Tesla: 96773000,
    Microsoft: 227583000,
    Google: 307394000
  };

  const calculateMetrics = (actual, estimate) => {
    const error = Math.abs(actual - estimate);
    const reward = Math.max(0, 100 - (error / actual) * 100); // Reward decreases as error increases
    return { error, reward };
  };

  // Function to compare predictions with actual earnings and revenue and give rankings
  const getRankings = () => {
    const rankings = candidates.map(candidate => {
      const { companyID, earningsEstimate, revenueEstimate } = candidate;
      const earningsMetrics = calculateMetrics(actualEarningsPerShare[companyID], earningsEstimate);
      const revenueMetrics = calculateMetrics(actualRevenue[companyID], revenueEstimate);

      return {
        ...candidate,
        earningsError: earningsMetrics.error,
        earningsReward: earningsMetrics.reward,
        revenueError: revenueMetrics.error,
        revenueReward: revenueMetrics.reward,
        totalReward: earningsMetrics.reward + revenueMetrics.reward
      };
    });

    // Sorting candidates by earnings and revenue difference
    // rankings.sort((a, b) => {
    //   const aTotalDiff = a.earningsDiff + a.revenueDiff;
    //   const bTotalDiff = b.earningsDiff + b.revenueDiff;
    //   return aTotalDiff - bTotalDiff;
    // });

    return rankings;
  };

  // Call the getRankings function to get the rankings
  const rankings = getRankings();

  return (
    <div className="candidates-table">
      <h2>Rankings</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>User</th>
            <th>Company</th>
            <th>Reporting Period</th>
            <th>EPS Estimate</th>
            <th>Revenue Estimate</th>
            <th>EPS Difference</th>
            <th>Revenue Difference</th>
            <th>EPS Reward</th>
            <th>Revenue Reward</th>
            <th>Total Reward</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((candidate, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{candidate.user}</td>
              <td>{candidate.companyID}</td>
              <td>{candidate.reportingPeriod}</td>
              <td>{candidate.earningsEstimate}</td>
              <td>{candidate.revenueEstimate}</td>
              <td>{candidate.earningsError}</td>
              <td>{candidate.revenueError}</td>
              <td>{candidate.earningsReward}</td>
              <td>{candidate.revenueReward}</td>
              <td>{candidate.totalReward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rankings;