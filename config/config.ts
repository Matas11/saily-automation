import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(__dirname, './urls.env'),
});

export const config = {
  homepage: process.env.HOMEPAGE as string,
  utmSource: process.env.UTM_SOURCE ?? 'qa_matas_bag',
};

Object.entries(config).forEach(([key, value]) => {
  if (!value) throw new Error(`${key} is not defined in urls.env`);
});