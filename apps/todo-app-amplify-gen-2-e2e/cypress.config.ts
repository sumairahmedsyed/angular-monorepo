import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run todo-app-amplify-gen-2:serve:development',
        production: 'nx run todo-app-amplify-gen-2:serve:production',
      },
      ciWebServerCommand: 'nx run todo-app-amplify-gen-2:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
