// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import data from '../../../public/api/cars.json';
import { Car } from '@/types/Car';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car[]>
) {
  res.status(200).json(data)
}
