"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface LegendPoint {
  id: number;
  x: number;
  y: number;
  name: string;
  icon: "occhio" | "fiamma" | "lupo" | "corvo";
}

const ICONS: Record<LegendPoint["icon"], string> = {
  occhio: "M -8 0 Q 0 -7 8 0 Q 0 7 -8 0 Z M 0 -2.5 a 2.5 2.5 0 1 0 0.01 0",
  fiamma: "M 0 8 C -6 4 -5 -2 0 -8 C 5 -2 6 4 0 8 Z",
  lupo: "M -8 4 L -4 -6 L 0 -1 L 4 -6 L 8 4 L 4 1 L 0 5 L -4 1 Z",
  corvo: "M -8 -2 Q -2 -8 0 -3 Q 2 -8 8 -2 Q 3 1 0 7 Q -3 1 -8 -2 Z",
};

// Confini reali delle 9 province della Sicilia.
// Fonte: openpolis/geojson-italy (ISTAT), proiezione equirettangolare locale.
// ViewBox: 0 0 660 480
const provincePaths: Record<string, string[]> = {
  Trapani: [
    "M 198.0 126.1 L 198.3 128.3 L 201.0 129.5 L 201.4 131.8 L 205.1 133.7 L 205.2 135.1 L 207.3 134.7 L 209.5 136.1 L 207.6 137.5 L 207.4 140.8 L 208.4 141.5 L 203.4 143.6 L 199.9 142.2 L 199.6 144.0 L 193.1 144.0 L 191.1 142.9 L 189.4 145.6 L 192.2 146.1 L 193.9 148.3 L 191.4 150.8 L 195.9 153.6 L 209.8 155.3 L 216.6 154.6 L 213.0 158.1 L 217.1 160.4 L 211.2 162.2 L 209.2 161.2 L 200.7 165.0 L 199.1 164.2 L 194.1 166.0 L 187.4 170.8 L 182.2 176.9 L 187.1 176.7 L 185.6 183.2 L 183.8 185.5 L 164.3 185.0 L 147.3 187.7 L 139.9 182.2 L 135.9 177.0 L 128.3 174.3 L 121.8 174.7 L 114.9 169.7 L 114.2 163.8 L 109.6 158.2 L 106.7 156.5 L 109.2 154.6 L 112.7 154.4 L 113.7 153.0 L 113.1 150.5 L 116.6 147.1 L 112.1 142.6 L 117.8 136.9 L 118.0 132.8 L 122.2 129.1 L 117.7 128.7 L 122.3 127.8 L 128.9 122.3 L 137.4 122.1 L 142.6 120.6 L 145.6 118.5 L 145.1 116.3 L 153.5 116.6 L 157.8 112.7 L 154.2 108.4 L 156.7 106.2 L 157.4 107.9 L 162.8 107.5 L 162.8 110.8 L 166.5 113.3 L 166.4 116.3 L 169.8 120.3 L 176.9 124.3 L 179.2 124.2 L 181.3 127.0 L 185.3 127.6 L 198.0 126.1 Z",
    "M 87.5 136.5 L 89.9 139.7 L 93.4 139.0 L 97.5 140.8 L 97.0 142.9 L 94.5 142.8 L 92.3 141.1 L 83.1 141.2 L 81.8 139.1 L 82.5 137.9 L 84.5 138.2 L 87.5 136.5 Z",
    "M 47.4 131.6 L 50.4 137.1 L 52.0 137.5 L 44.9 136.4 L 41.7 132.1 L 47.4 131.6 Z",
    "M 92.0 128.1 L 94.6 132.2 L 90.0 131.6 L 89.8 129.8 L 92.0 128.1 Z",
    "M 111.6 143.1 L 110.3 144.3 L 111.0 149.8 L 110.0 150.9 L 107.3 144.3 L 111.6 143.1 Z",
    "M 29.6 280.9 L 36.2 283.2 L 39.2 282.7 L 44.6 285.8 L 46.0 288.4 L 45.6 291.6 L 40.9 294.5 L 34.2 293.2 L 32.5 290.7 L 25.0 285.6 L 25.3 282.7 L 29.6 280.9 Z",
  ],
  Palermo: [
    "M 389.6 178.9 L 384.7 181.0 L 384.1 178.7 L 381.3 179.1 L 377.2 176.8 L 373.3 176.3 L 368.6 178.4 L 367.7 180.2 L 368.9 182.2 L 367.9 182.6 L 358.0 184.4 L 351.9 183.0 L 353.0 181.6 L 347.9 180.2 L 348.8 175.1 L 346.1 174.3 L 344.3 171.9 L 334.9 169.2 L 334.7 166.1 L 333.0 163.7 L 327.8 166.9 L 327.8 169.4 L 322.4 168.7 L 320.6 171.8 L 311.8 170.6 L 310.3 173.5 L 307.3 175.0 L 299.2 175.3 L 293.9 177.9 L 286.7 177.5 L 284.4 176.5 L 283.9 174.9 L 276.6 176.5 L 275.0 174.7 L 270.5 176.9 L 265.5 174.8 L 263.5 175.9 L 266.3 180.3 L 264.7 180.4 L 263.1 182.7 L 264.9 186.0 L 266.9 186.3 L 266.3 187.9 L 259.1 190.4 L 256.3 188.5 L 256.5 185.5 L 253.2 184.1 L 255.4 181.4 L 253.1 179.2 L 257.6 176.7 L 257.7 175.2 L 254.4 174.4 L 253.4 176.1 L 249.8 177.4 L 246.1 176.4 L 242.0 181.0 L 235.4 177.2 L 235.9 173.2 L 231.5 170.7 L 224.8 171.2 L 220.8 169.4 L 213.7 170.8 L 208.4 168.0 L 206.3 165.2 L 202.7 164.1 L 209.2 161.2 L 211.2 162.2 L 217.1 160.4 L 213.0 158.1 L 216.8 154.8 L 213.7 154.2 L 209.8 155.3 L 195.9 153.6 L 191.4 150.8 L 193.7 147.9 L 192.2 146.1 L 189.4 145.6 L 191.1 142.9 L 193.1 144.0 L 199.6 144.0 L 199.9 142.2 L 203.4 143.6 L 208.4 141.5 L 207.4 140.8 L 207.6 137.5 L 209.5 136.1 L 207.3 134.7 L 205.2 135.1 L 205.1 133.7 L 201.4 131.8 L 201.0 129.5 L 198.6 128.6 L 197.0 125.6 L 213.5 119.4 L 211.9 115.3 L 209.4 113.0 L 212.6 112.4 L 212.3 111.4 L 214.7 109.6 L 213.6 108.3 L 220.7 106.0 L 227.0 106.7 L 227.6 108.7 L 232.1 108.9 L 239.6 106.7 L 240.3 104.9 L 245.3 105.1 L 252.7 101.7 L 254.5 104.9 L 260.6 107.2 L 262.3 111.0 L 261.2 112.1 L 262.1 114.1 L 261.1 113.2 L 260.1 114.0 L 263.5 116.7 L 273.2 118.5 L 283.3 116.8 L 283.8 115.3 L 288.8 116.2 L 288.1 117.6 L 289.2 118.6 L 288.5 122.1 L 289.4 123.4 L 307.3 131.0 L 319.1 132.6 L 315.9 132.1 L 317.1 133.7 L 331.5 134.0 L 340.8 132.2 L 355.5 127.1 L 365.4 126.6 L 368.1 125.4 L 374.9 128.4 L 382.2 128.9 L 388.3 127.3 L 394.4 128.3 L 402.0 136.4 L 401.5 137.2 L 405.9 139.2 L 405.9 141.6 L 412.2 141.3 L 409.4 143.3 L 408.4 146.7 L 410.2 151.5 L 407.6 153.0 L 409.0 156.6 L 407.2 157.4 L 412.7 163.6 L 407.2 169.7 L 399.8 172.5 L 390.3 173.8 L 391.2 177.1 L 389.6 178.9 Z",
    "M 373.6 173.2 L 378.5 172.5 L 377.1 170.8 L 379.4 169.1 L 371.5 166.2 L 369.2 169.0 L 371.2 171.0 L 365.7 171.4 L 365.6 173.4 L 367.5 175.2 L 369.9 175.3 L 373.6 173.2 Z",
    "M 224.5 179.2 L 224.4 176.9 L 228.3 176.6 L 230.6 178.1 L 224.5 179.2 Z",
    "M 230.3 37.6 L 233.6 39.0 L 229.2 41.3 L 225.9 41.0 L 227.4 38.5 L 230.3 37.6 Z",
  ],
  Messina: [
    "M 600.6 127.4 L 585.4 140.5 L 585.1 142.1 L 578.2 146.5 L 576.6 148.6 L 577.5 149.8 L 572.3 152.4 L 573.3 153.7 L 570.4 155.7 L 568.4 155.0 L 564.3 150.1 L 553.2 144.3 L 549.5 144.5 L 546.1 142.9 L 524.9 144.7 L 524.6 142.8 L 520.8 142.1 L 518.5 137.1 L 516.5 135.8 L 505.6 140.0 L 503.2 138.3 L 503.8 136.7 L 502.1 136.1 L 500.0 139.2 L 495.5 136.9 L 489.6 138.5 L 488.2 141.6 L 491.8 143.2 L 490.2 145.2 L 488.8 143.7 L 485.2 143.5 L 485.2 150.4 L 488.5 147.8 L 492.4 148.9 L 495.5 156.0 L 488.2 153.8 L 479.7 155.1 L 476.3 157.2 L 463.3 155.5 L 455.1 151.9 L 455.7 150.0 L 458.2 149.1 L 457.7 146.3 L 447.4 149.9 L 442.4 155.2 L 438.7 154.5 L 439.9 151.0 L 430.9 148.1 L 429.2 150.4 L 410.2 151.5 L 408.4 146.7 L 409.4 143.3 L 412.2 141.3 L 405.9 141.6 L 405.9 139.2 L 401.5 137.2 L 402.0 136.4 L 394.4 128.3 L 415.0 129.8 L 420.0 128.3 L 425.9 128.6 L 434.1 125.5 L 441.4 126.5 L 451.1 125.2 L 455.4 123.0 L 468.2 121.5 L 475.4 117.9 L 486.9 109.3 L 493.2 111.2 L 510.2 108.5 L 514.1 105.9 L 522.9 110.9 L 535.8 111.5 L 537.3 113.8 L 544.6 115.0 L 556.9 110.8 L 562.7 106.8 L 567.5 99.4 L 566.9 96.6 L 564.8 95.8 L 567.3 96.0 L 569.3 98.2 L 567.6 102.7 L 576.0 104.1 L 597.8 99.6 L 612.7 92.5 L 616.5 91.8 L 622.7 94.1 L 635.0 96.1 L 623.5 98.9 L 619.4 105.3 L 619.6 106.4 L 620.9 106.1 L 620.5 105.2 L 621.8 106.2 L 615.5 111.6 L 608.9 121.1 L 600.6 127.4 Z",
    "M 503.0 61.2 L 494.6 58.0 L 496.6 55.4 L 507.2 55.7 L 506.9 61.1 L 503.0 61.2 Z",
    "M 521.5 74.9 L 522.9 75.6 L 522.1 77.5 L 527.6 79.5 L 528.5 82.8 L 524.4 83.1 L 519.7 80.6 L 518.1 77.9 L 520.9 76.6 L 521.5 74.9 Z",
    "M 521.6 63.1 L 522.0 67.4 L 524.9 68.3 L 520.6 69.6 L 521.9 72.1 L 521.2 73.7 L 518.6 73.5 L 517.4 71.3 L 511.6 68.9 L 512.4 64.7 L 513.8 63.7 L 521.6 63.1 Z",
    "M 423.6 59.1 L 424.4 59.8 L 423.3 62.0 L 420.4 61.8 L 420.3 59.7 L 423.6 59.1 Z",
    "M 454.9 55.0 L 458.7 55.6 L 459.5 58.2 L 461.5 58.9 L 455.0 58.3 L 452.7 56.1 L 454.9 55.0 Z",
    "M 540.0 47.1 L 540.1 49.4 L 537.1 49.8 L 538.0 47.4 L 540.0 47.1 Z",
    "M 564.3 25.7 L 567.9 26.8 L 565.1 30.3 L 563.6 30.9 L 558.9 28.8 L 564.3 25.7 Z",
  ],
  Agrigento: [
    "M 309.3 235.1 L 306.1 230.9 L 295.1 226.4 L 292.2 223.4 L 274.1 221.8 L 271.0 220.8 L 266.5 217.0 L 253.4 213.1 L 248.6 209.6 L 245.2 209.5 L 242.6 205.5 L 228.5 196.5 L 213.3 194.7 L 202.9 195.6 L 202.8 193.9 L 194.8 187.4 L 183.8 185.5 L 185.6 183.2 L 187.1 176.7 L 182.4 177.1 L 184.0 175.2 L 183.2 174.5 L 186.7 172.8 L 187.4 170.8 L 194.1 166.0 L 199.4 164.1 L 200.2 165.0 L 205.1 164.5 L 208.8 168.3 L 213.7 170.8 L 220.8 169.4 L 224.8 171.2 L 231.5 170.7 L 235.9 173.2 L 235.4 177.2 L 242.0 181.0 L 244.7 177.1 L 251.3 177.1 L 254.4 174.4 L 258.1 176.2 L 253.1 179.2 L 255.4 181.4 L 253.2 184.1 L 256.5 185.5 L 256.3 188.5 L 259.1 190.4 L 266.3 187.9 L 266.9 186.3 L 264.9 186.0 L 263.1 182.7 L 264.7 180.4 L 266.3 180.3 L 263.5 175.9 L 265.5 174.8 L 270.5 176.9 L 275.0 174.7 L 276.6 176.5 L 283.9 174.9 L 285.7 177.2 L 293.9 177.9 L 299.2 175.3 L 307.3 175.0 L 310.3 173.5 L 310.7 171.0 L 314.1 170.2 L 325.3 172.3 L 331.8 171.1 L 333.2 172.7 L 335.4 172.7 L 333.5 177.1 L 336.5 178.7 L 336.2 180.4 L 329.8 179.5 L 327.8 181.7 L 325.5 181.6 L 325.9 182.9 L 324.1 183.6 L 310.7 185.0 L 310.4 186.3 L 312.9 187.7 L 314.3 190.7 L 313.2 191.0 L 314.2 192.5 L 313.7 195.3 L 308.2 198.5 L 307.2 200.5 L 313.2 200.8 L 316.2 203.2 L 323.2 204.7 L 327.2 203.1 L 333.7 204.3 L 339.5 203.5 L 339.2 204.7 L 341.8 208.0 L 347.4 208.0 L 349.6 210.0 L 345.8 211.6 L 345.1 213.7 L 352.5 217.3 L 358.6 217.6 L 363.1 220.3 L 363.9 222.2 L 367.3 223.2 L 369.6 222.3 L 369.0 224.6 L 365.9 226.3 L 367.3 226.7 L 365.5 228.9 L 367.0 230.7 L 363.2 231.6 L 365.1 235.1 L 361.5 235.2 L 366.2 239.4 L 369.3 240.1 L 370.3 246.4 L 346.2 247.3 L 335.6 241.4 L 323.5 240.8 L 319.0 237.9 L 309.3 235.1 Z",
    "M 224.5 179.2 L 230.6 178.1 L 228.3 176.6 L 224.4 176.9 L 224.5 179.2 Z",
    "M 125.6 450.4 L 139.8 451.5 L 140.5 454.9 L 121.7 451.5 L 125.6 450.4 Z",
    "M 180.3 405.6 L 181.3 408.3 L 177.5 408.2 L 176.3 406.7 L 180.3 405.6 Z",
  ],
  Caltanissetta: [
    "M 311.5 186.7 L 310.1 185.8 L 312.1 184.2 L 324.1 183.6 L 325.9 182.9 L 325.5 181.6 L 327.8 181.7 L 329.8 179.5 L 336.7 180.1 L 336.5 178.7 L 333.5 177.1 L 335.4 172.7 L 333.2 172.7 L 331.8 171.1 L 320.6 171.8 L 322.4 168.7 L 327.8 169.4 L 327.8 166.9 L 333.0 163.7 L 334.7 166.1 L 334.9 169.2 L 344.3 171.9 L 346.1 174.3 L 348.8 175.1 L 347.9 180.2 L 353.0 181.6 L 351.9 183.0 L 358.0 184.4 L 367.9 182.6 L 368.9 182.2 L 367.7 180.2 L 368.6 178.4 L 373.3 176.3 L 377.2 176.8 L 381.3 179.1 L 384.1 178.7 L 384.7 181.0 L 391.2 180.9 L 390.5 184.4 L 386.9 185.2 L 387.1 189.3 L 384.8 191.9 L 390.5 197.9 L 386.0 199.1 L 377.3 204.7 L 376.0 205.6 L 376.1 207.7 L 373.5 207.6 L 377.1 211.0 L 376.2 211.7 L 379.2 214.9 L 378.3 216.1 L 383.2 216.9 L 385.5 215.4 L 386.2 216.8 L 392.0 218.2 L 403.9 215.2 L 407.6 215.8 L 409.4 217.4 L 416.2 218.0 L 416.3 221.0 L 422.1 220.5 L 422.1 224.2 L 427.2 223.4 L 428.7 226.3 L 427.1 226.9 L 425.6 233.6 L 427.2 234.1 L 426.8 235.3 L 431.4 237.2 L 435.1 235.6 L 442.2 243.1 L 438.5 247.4 L 434.5 248.0 L 437.1 253.3 L 424.2 259.5 L 419.7 259.9 L 413.0 255.4 L 408.7 253.6 L 407.5 254.2 L 408.3 253.4 L 406.7 252.6 L 392.3 248.3 L 376.2 245.8 L 370.3 246.4 L 369.3 240.1 L 366.2 239.4 L 361.5 235.2 L 365.1 235.1 L 363.2 231.6 L 367.0 230.7 L 365.5 228.9 L 367.3 226.7 L 365.9 226.3 L 369.0 224.6 L 369.6 222.3 L 367.3 223.2 L 363.9 222.2 L 363.1 220.3 L 358.6 217.6 L 352.5 217.3 L 345.1 213.7 L 345.8 211.6 L 349.6 210.0 L 347.4 208.0 L 341.8 208.0 L 339.2 204.7 L 339.5 203.5 L 333.7 204.3 L 327.2 203.1 L 323.2 204.7 L 316.2 203.2 L 313.2 200.8 L 307.2 200.5 L 308.2 198.5 L 313.7 195.3 L 314.2 192.5 L 313.2 191.0 L 314.3 190.7 L 311.5 186.7 Z",
    "M 378.8 172.2 L 374.3 172.9 L 369.9 175.3 L 367.3 175.1 L 365.5 173.1 L 366.1 171.0 L 371.2 171.0 L 369.2 169.0 L 371.5 166.2 L 378.9 168.5 L 379.3 169.8 L 377.1 170.8 L 378.8 172.2 Z",
  ],
  Enna: [
    "M 474.7 187.9 L 468.0 190.7 L 461.7 190.8 L 459.6 189.0 L 453.0 190.2 L 450.6 193.1 L 444.2 194.1 L 450.8 195.8 L 448.9 198.1 L 453.4 202.0 L 460.6 201.9 L 468.0 204.6 L 466.1 206.6 L 459.8 207.9 L 459.1 209.7 L 461.1 210.6 L 459.6 213.0 L 452.8 213.0 L 444.5 214.9 L 449.4 218.1 L 446.3 220.2 L 437.4 215.0 L 433.5 216.3 L 439.0 220.1 L 435.3 222.3 L 421.4 220.4 L 416.3 221.0 L 416.2 218.0 L 409.4 217.4 L 407.6 215.8 L 403.9 215.2 L 392.0 218.2 L 386.2 216.8 L 385.5 215.4 L 383.2 216.9 L 379.3 216.6 L 377.9 212.5 L 376.2 211.7 L 376.5 210.0 L 373.5 207.6 L 376.1 207.7 L 376.0 205.6 L 377.3 204.7 L 386.0 199.1 L 390.5 197.9 L 384.8 191.9 L 387.1 189.3 L 386.9 185.2 L 390.5 184.4 L 391.2 180.9 L 386.5 180.4 L 391.2 177.1 L 390.3 173.8 L 399.8 172.5 L 403.9 170.1 L 406.1 170.2 L 412.6 163.8 L 411.4 161.1 L 408.5 159.8 L 408.5 157.8 L 407.2 157.4 L 409.0 156.6 L 407.6 153.0 L 410.2 151.5 L 429.2 150.4 L 430.9 148.1 L 439.9 151.0 L 438.7 154.5 L 442.4 155.2 L 447.4 149.9 L 457.7 146.3 L 458.2 149.1 L 454.9 151.6 L 463.3 155.5 L 476.3 157.2 L 479.7 155.1 L 485.9 154.3 L 486.2 158.0 L 481.3 159.7 L 485.0 162.6 L 480.0 165.5 L 482.3 166.9 L 481.5 169.3 L 483.1 172.0 L 485.2 170.7 L 487.4 171.4 L 495.0 167.9 L 495.7 171.4 L 494.1 172.7 L 494.1 175.8 L 499.4 178.0 L 500.1 183.9 L 493.8 187.5 L 495.6 188.3 L 495.3 190.9 L 492.8 195.1 L 489.4 194.9 L 478.8 188.3 L 474.7 187.9 Z",
  ],
  Catania: [
    "M 555.9 185.8 L 551.7 189.7 L 546.9 191.5 L 547.3 192.4 L 544.2 195.3 L 544.4 197.6 L 544.0 195.2 L 542.2 197.7 L 543.0 213.7 L 533.4 213.3 L 532.3 211.2 L 530.5 212.4 L 525.6 211.8 L 520.9 210.2 L 517.6 207.3 L 513.8 206.8 L 509.7 207.4 L 508.6 209.5 L 502.4 211.1 L 501.6 213.8 L 492.1 217.1 L 492.0 218.2 L 496.0 219.3 L 502.4 218.1 L 510.4 219.9 L 508.4 221.9 L 508.9 223.1 L 504.5 223.9 L 503.0 226.6 L 497.3 227.0 L 490.9 231.0 L 492.6 233.0 L 497.5 232.9 L 499.5 234.8 L 507.0 233.6 L 506.8 236.1 L 501.1 239.0 L 503.0 241.9 L 501.4 244.0 L 491.3 242.1 L 494.6 246.4 L 483.4 247.7 L 483.7 245.0 L 480.7 243.9 L 475.2 247.0 L 471.1 246.8 L 469.4 249.0 L 465.9 249.9 L 464.3 248.4 L 457.4 253.3 L 453.5 253.3 L 451.6 251.7 L 451.8 250.4 L 441.6 253.6 L 437.1 253.3 L 434.5 248.0 L 438.5 247.4 L 442.0 242.4 L 435.1 235.6 L 431.4 237.2 L 426.8 235.3 L 427.2 234.1 L 425.6 233.6 L 427.1 226.9 L 428.7 226.3 L 426.9 223.1 L 422.1 224.2 L 422.1 220.5 L 434.8 222.3 L 438.9 220.9 L 437.9 218.9 L 433.5 216.5 L 437.4 215.0 L 444.0 219.6 L 447.3 220.0 L 449.4 218.1 L 444.5 214.9 L 452.8 213.0 L 459.6 213.0 L 461.1 210.6 L 459.1 209.7 L 459.8 207.9 L 468.0 205.2 L 460.6 201.9 L 453.4 202.0 L 448.9 198.1 L 450.8 195.8 L 444.2 194.3 L 450.6 193.1 L 453.0 190.2 L 459.6 189.0 L 461.7 190.8 L 468.0 190.7 L 474.7 187.9 L 478.8 188.3 L 489.4 194.9 L 494.0 194.4 L 495.6 188.3 L 493.8 187.5 L 500.1 183.9 L 499.4 178.0 L 494.1 175.8 L 494.1 172.7 L 495.7 171.4 L 495.0 167.9 L 487.4 171.4 L 485.2 170.7 L 483.0 172.0 L 481.4 169.0 L 482.3 166.9 L 479.9 165.8 L 485.0 162.6 L 481.3 159.7 L 486.2 158.0 L 485.9 154.3 L 489.4 153.8 L 495.5 156.0 L 492.4 148.9 L 488.5 147.8 L 485.8 150.6 L 485.0 149.4 L 485.2 143.5 L 490.6 145.0 L 491.8 143.0 L 488.2 141.5 L 489.6 138.5 L 492.8 137.1 L 495.5 136.9 L 500.0 139.2 L 502.0 136.1 L 503.0 136.3 L 503.2 138.3 L 505.6 140.0 L 516.5 135.8 L 518.5 137.1 L 520.8 142.1 L 524.6 142.8 L 524.9 144.7 L 546.4 142.9 L 549.5 144.5 L 553.2 144.3 L 564.3 150.1 L 568.4 155.0 L 570.4 155.7 L 561.6 164.5 L 563.8 168.5 L 560.7 172.6 L 560.7 175.5 L 556.7 178.3 L 557.1 185.6 L 555.9 185.8 Z",
  ],
  Ragusa: [
    "M 419.7 259.9 L 424.2 259.5 L 437.4 253.0 L 441.6 253.6 L 451.2 250.5 L 453.5 253.3 L 457.4 253.3 L 464.3 248.4 L 465.9 249.9 L 469.4 249.0 L 471.1 246.8 L 475.2 247.0 L 480.7 243.9 L 483.7 245.0 L 483.4 247.7 L 489.6 247.7 L 494.6 246.4 L 491.3 242.1 L 494.6 243.1 L 495.5 244.1 L 494.5 245.4 L 498.3 245.6 L 498.5 249.6 L 502.4 252.2 L 499.6 251.3 L 498.3 253.1 L 500.5 253.8 L 501.5 252.9 L 501.8 255.0 L 504.2 255.7 L 509.5 261.4 L 509.8 264.8 L 514.8 268.5 L 517.9 272.7 L 505.1 265.5 L 505.2 263.4 L 501.4 263.6 L 501.9 267.2 L 506.0 267.4 L 511.2 269.8 L 508.0 270.5 L 509.1 273.2 L 514.2 274.8 L 518.0 277.8 L 515.2 279.7 L 506.8 276.9 L 504.1 282.4 L 506.0 284.0 L 509.8 282.8 L 512.5 284.3 L 515.6 284.2 L 518.8 286.5 L 520.5 285.6 L 525.7 288.5 L 528.1 298.6 L 520.8 299.7 L 513.7 295.9 L 508.7 294.9 L 492.2 298.5 L 486.6 296.3 L 477.5 296.2 L 469.0 291.0 L 460.5 288.9 L 445.1 287.7 L 439.7 284.1 L 437.1 276.9 L 432.6 271.5 L 419.7 259.9 Z",
  ],
  Siracusa: [
    "M 558.0 232.9 L 558.3 234.8 L 561.1 237.1 L 561.5 240.1 L 564.5 240.7 L 566.3 239.5 L 568.0 241.2 L 564.8 240.6 L 564.3 243.6 L 571.1 246.4 L 576.5 246.3 L 577.2 249.8 L 575.6 251.5 L 576.9 252.1 L 576.5 253.1 L 573.8 251.6 L 572.4 253.5 L 574.5 255.9 L 577.3 254.6 L 579.8 255.6 L 583.1 259.9 L 579.6 259.6 L 577.6 258.1 L 573.1 259.2 L 571.4 260.4 L 572.1 261.8 L 570.1 262.7 L 571.1 263.3 L 563.1 264.8 L 553.3 271.0 L 550.5 277.4 L 546.5 279.4 L 545.4 285.2 L 543.7 286.6 L 544.9 291.4 L 547.6 293.1 L 548.2 298.6 L 550.7 301.2 L 549.5 303.3 L 546.6 302.3 L 541.1 305.7 L 537.4 303.9 L 535.3 300.5 L 528.1 298.6 L 525.7 288.5 L 520.5 285.6 L 518.8 286.5 L 515.6 284.2 L 512.5 284.3 L 509.8 282.8 L 506.0 284.0 L 504.1 282.4 L 506.8 276.9 L 515.2 279.7 L 518.0 277.8 L 514.2 274.8 L 509.1 273.2 L 508.0 270.5 L 511.2 269.8 L 506.0 267.4 L 501.9 267.2 L 501.4 263.6 L 505.2 263.4 L 505.1 265.5 L 517.9 272.7 L 514.8 268.5 L 509.8 264.8 L 509.5 261.4 L 504.2 255.7 L 501.8 255.0 L 501.5 252.9 L 500.5 253.8 L 498.3 253.1 L 499.6 251.3 L 502.4 252.3 L 498.5 249.6 L 498.3 245.6 L 494.4 245.2 L 495.5 243.9 L 494.3 243.0 L 500.7 244.1 L 502.5 243.3 L 502.9 241.3 L 501.1 239.0 L 506.8 236.1 L 507.0 233.6 L 499.5 234.8 L 497.5 232.9 L 492.6 233.0 L 490.9 231.0 L 497.3 227.0 L 503.0 226.6 L 504.5 223.9 L 508.9 223.1 L 508.4 221.9 L 510.4 219.9 L 502.4 218.1 L 496.0 219.3 L 491.8 217.4 L 501.6 213.8 L 502.4 211.1 L 508.6 209.5 L 510.4 207.1 L 517.6 207.3 L 520.9 210.2 L 525.6 211.8 L 530.5 212.4 L 532.3 211.2 L 533.4 213.3 L 543.0 213.7 L 545.1 219.9 L 550.5 220.2 L 559.0 223.7 L 561.6 222.1 L 569.9 228.9 L 568.5 230.1 L 564.7 229.2 L 566.1 234.5 L 562.9 228.2 L 558.5 229.5 L 560.0 230.9 L 558.0 232.9 Z",
  ],
};

const activeProvinces = ["Agrigento"];
const lockedProvinces = ["Palermo", "Trapani", "Caltanissetta", "Enna", "Catania", "Siracusa", "Ragusa", "Messina"];

const allPoints: LegendPoint[] = [
  { id: 1,  x: 268, y: 215, name: "Agrigento — I Morti di Ognissanti", icon: "corvo"  },
  { id: 2,  x: 305, y: 153, name: "Palermo",                           icon: "occhio" },
  { id: 3,  x: 155, y: 168, name: "Trapani",                           icon: "lupo"   },
  { id: 4,  x: 390, y: 212, name: "Caltanissetta",                     icon: "fiamma" },
  { id: 5,  x: 442, y: 185, name: "Enna",                              icon: "corvo"  },
  { id: 6,  x: 510, y: 190, name: "Catania",                           icon: "occhio" },
  { id: 7,  x: 535, y: 262, name: "Siracusa",                          icon: "lupo"   },
  { id: 8,  x: 470, y: 272, name: "Ragusa",                            icon: "fiamma" },
  { id: 9,  x: 520, y: 118, name: "Messina",                           icon: "corvo"  },
];

export default function SicilyMap() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<LegendPoint | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div
        className="relative w-full max-w-5xl rounded-sm overflow-hidden"
        style={{
          border: "1px solid rgba(184,134,11,0.35)",
          boxShadow: "0 0 60px rgba(61,43,79,0.3), 0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        <svg
          viewBox="0 0 660 480"
          className="w-full h-auto"
          role="img"
          aria-label="Mappa della Sicilia con le 9 province; Agrigento svelata con la leggenda di Ognissanti"
        >
          <defs>
            <radialGradient id="parchmentSicily" cx="50%" cy="40%" r="75%">
              <stop offset="0%" stopColor="#F2E4C2" />
              <stop offset="100%" stopColor="#D9C194" />
            </radialGradient>
            <radialGradient id="pointGlowSicily" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C0392B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#C0392B" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="660" height="480" fill="url(#parchmentSicily)" />
          <rect width="660" height="480" fill="transparent" stroke="#5a4a32" strokeWidth="2" opacity="0.4" />

          {/* Province bloccate */}
          {lockedProvinces.map((name) =>
            provincePaths[name].map((d, i) => (
              <path
                key={`${name}-${i}`}
                d={d}
                fill="#8d8470"
                stroke="#5a4a32"
                strokeWidth="1.5"
                opacity="0.45"
              />
            ))
          )}

          {/* Agrigento — provincia attiva */}
          {provincePaths.Agrigento.map((d, i) => (
            <path
              key={`agrigento-${i}`}
              d={d}
              fill="#C7A876"
              stroke="#8B1A1A"
              strokeWidth="2.5"
              opacity="0.95"
            />
          ))}

          {/* Etichette province */}
          <g style={{ fontFamily: "Georgia, serif" }} fill="#5a4a32" opacity="0.6">
            <text x="305" y="150" fontSize="12" textAnchor="middle">Palermo</text>
            <text x="152" y="165" fontSize="11" textAnchor="middle">Trapani</text>
            <text x="518" y="115" fontSize="11" textAnchor="middle">Messina</text>
            <text x="442" y="182" fontSize="10" textAnchor="middle">Enna</text>
            <text x="510" y="188" fontSize="11" textAnchor="middle">Catania</text>
            <text x="388" y="210" fontSize="10" textAnchor="middle">Caltanissetta</text>
            <text x="535" y="260" fontSize="11" textAnchor="middle">Siracusa</text>
            <text x="468" y="270" fontSize="11" textAnchor="middle">Ragusa</text>
            <text x="268" y="213" fontSize="13" textAnchor="middle" fill="#8B1A1A" opacity="0.9" fontWeight="bold">
              AGRIGENTO
            </text>
          </g>

          {/* Compass rose */}
          <g transform="translate(615,430)" opacity="0.7">
            <circle r="22" fill="none" stroke="#5a4a32" strokeWidth="1.5" />
            <path d="M 0 -18 L 4 0 L 0 18 L -4 0 Z" fill="#8B1A1A" />
            <path d="M -18 0 L 0 -4 L 18 0 L 0 4 Z" fill="#5a4a32" />
          </g>

          {/* Legend points */}
          {allPoints.map((p) => (
            <g
              key={p.id}
              transform={`translate(${p.x}, ${p.y})`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelected(p)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={p.name}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(p);
              }}
            >
              {hovered === p.id && !prefersReduced && (
                <circle r="18" fill="url(#pointGlowSicily)" />
              )}
              <circle
                r="9"
                fill={hovered === p.id ? "#8B1A1A" : "#2A2014"}
                stroke="#B8860B"
                strokeWidth="1.2"
                style={{ transition: "fill 0.3s" }}
              />
              <path d={ICONS[p.icon]} fill="#F2E4C2" transform="scale(0.7)" />
              {hovered === p.id && (
                <g transform="translate(0, -20)">
                  <rect
                    x={-p.name.length * 2.9}
                    y={-12}
                    width={p.name.length * 5.8}
                    height={18}
                    rx={4}
                    fill="#15101c"
                    opacity="0.92"
                  />
                  <text textAnchor="middle" y={1} fontFamily="Georgia, serif" fontSize="10" fill="#E8D5B0">
                    {p.name}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
            style={{ background: "rgba(10,10,15,0.85)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
          >
            <motion.div
              className="relative max-w-md w-full p-8 rounded-sm text-center flex flex-col items-center gap-5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(184,134,11,0.35)",
                boxShadow: "0 0 60px rgba(139,26,26,0.3)",
              }}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.id === 1 ? (
                <>
                  <span className="text-4xl" aria-hidden="true">💀</span>
                  <h3 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-moon)" }}>
                    I Morti di Ognissanti
                  </h3>
                  <p className="font-crimson italic text-lg" style={{ color: "var(--accent-ghost)" }}>
                    Ad Agrigento, la notte tra il primo e il secondo novembre, i morti tornano a casa.
                  </p>
                  <p className="font-crimson text-base leading-relaxed" style={{ color: "var(--accent-ghost)", opacity: 0.85 }}>
                    In Sicilia Ognissanti non è una commemorazione. È un appuntamento.
                    I morti tornano a tavola, i bambini trovano i regali lasciati dai nonni,
                    e chi non rispetta il rito paga il prezzo. Lo chiamano il ritorno dei cari.
                    Ma non tutti quelli che bussano alla porta erano cari.
                  </p>
                  <a
                    href="https://www.amazon.it/dp/B0HPGLGQKJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all"
                    style={{ background: "var(--accent-blood)", color: "var(--accent-moon)" }}
                    onClick={() => setSelected(null)}
                  >
                    Scopri la Leggenda →
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all hover:bg-[var(--accent-blood)]/10"
                    style={{ border: "1px solid rgba(139,26,26,0.4)", color: "var(--accent-moon)" }}
                  >
                    Chiudi
                  </button>
                </>
              ) : (
                <>
                  <span className="text-4xl" aria-hidden="true">🔒</span>
                  <h3 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-moon)" }}>
                    La Leggenda di {selected.name}
                  </h3>
                  <p className="font-crimson italic text-lg" style={{ color: "var(--accent-ghost)" }}>
                    Questa leggenda sarà svelata presto.
                  </p>
                  <p className="font-crimson text-base" style={{ color: "var(--accent-ghost)", opacity: 0.7 }}>
                    Ogni mese una nuova creatura prende vita su questa mappa.
                  </p>
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-2 font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all hover:bg-[var(--accent-blood)]/10"
                    style={{ border: "1px solid rgba(139,26,26,0.4)", color: "var(--accent-moon)" }}
                  >
                    Chiudi
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
