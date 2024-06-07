import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'DevProbe',
  webDir: 'www',
  server: {
    url: 'http://localhost:8100',
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },



};

export default config;
