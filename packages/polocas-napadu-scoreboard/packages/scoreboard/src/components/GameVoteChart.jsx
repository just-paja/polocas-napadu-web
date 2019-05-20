import React from 'react';

import { VolumeScrapeChart } from './VolumeScrapeChart';
import { withVolumeScrape } from './withVolumeScrape';

export default withVolumeScrape({
  getLineColor: line => line.contestantGroup.color,
})(VolumeScrapeChart);
