import React from 'react';

import { MonitorView } from '../editor/containers';
import { SpectatorView } from '../spectator/containers';

export default ({ spectator }) => (spectator ? <SpectatorView /> : <MonitorView />);
