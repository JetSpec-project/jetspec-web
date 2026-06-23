window.PTD_DEMO_LANES = window.PTD_DEMO_LANES || [];
window.PTD_DEMO_LANES.push({
  "schema": "ptd-demo-trace/v0",
  "lane": {
    "method": "AR",
    "engine": "torch",
    "model": "Qwen/Qwen3-8B",
    "device": "NVIDIA B200",
    "dataset": "GSM8K",
    "recorded": "2026-06-22",
    "timing_source": "measured",
    "run_config": {
      "note": "MEASURED: per-method throughput (tok/s), token count, accepted-length and answer text are measured on NVIDIA B200 (GSM8K, Qwen3-8B). Token-level pacing within each lane is reconstructed from the measured throughput (aggregate speed is recorded, not per-token wall-clock); relative lane speeds are preserved. Export decode_time_s=5.3657s (inconsistent with tps for spec lanes; race timed by tps).",
      "target_tps": 43.349,
      "measured_tps": 43.349,
      "samples": 16,
      "world_size": 1
    }
  },
  "prompt": {
    "id": "gsm8k",
    "text": "<|im_start|>user\nCarmen has $100, Samantha has $25 more than Carmen, and Daisy has $50 more than Samantha. How much do all three girls have combined?\nPlease reason step by step, and put your final answer within \\boxed{}.<|im_end|>\n<|im_start|>assistant\n<think>\n\n</think>\n\n",
    "chat_template": "qwen3 enable_thinking=False"
  },
  "events": [
    {
      "idx": 0,
      "t_ms": 0.0,
      "dur_ms": 23.0685,
      "end_ms": 23.0685,
      "text": "We are ",
      "token_texts": [
        "We are "
      ],
      "accepted_count": 1
    },
    {
      "idx": 1,
      "t_ms": 23.0685,
      "dur_ms": 23.0685,
      "end_ms": 46.1369,
      "text": "g",
      "token_texts": [
        "g"
      ],
      "accepted_count": 1
    },
    {
      "idx": 2,
      "t_ms": 46.1369,
      "dur_ms": 23.0685,
      "end_ms": 69.2054,
      "text": "iven ",
      "token_texts": [
        "iven "
      ],
      "accepted_count": 1
    },
    {
      "idx": 3,
      "t_ms": 69.2054,
      "dur_ms": 23.0685,
      "end_ms": 92.2739,
      "text": "the ",
      "token_texts": [
        "the "
      ],
      "accepted_count": 1
    },
    {
      "idx": 4,
      "t_ms": 92.2739,
      "dur_ms": 23.0685,
      "end_ms": 115.3423,
      "text": "f",
      "token_texts": [
        "f"
      ],
      "accepted_count": 1
    },
    {
      "idx": 5,
      "t_ms": 115.3423,
      "dur_ms": 23.0685,
      "end_ms": 138.4108,
      "text": "ollowing ",
      "token_texts": [
        "ollowing "
      ],
      "accepted_count": 1
    },
    {
      "idx": 6,
      "t_ms": 138.4108,
      "dur_ms": 23.0685,
      "end_ms": 161.4792,
      "text": "i",
      "token_texts": [
        "i"
      ],
      "accepted_count": 1
    },
    {
      "idx": 7,
      "t_ms": 161.4792,
      "dur_ms": 23.0685,
      "end_ms": 184.5477,
      "text": "n",
      "token_texts": [
        "n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 8,
      "t_ms": 184.5477,
      "dur_ms": 23.0685,
      "end_ms": 207.6162,
      "text": "f",
      "token_texts": [
        "f"
      ],
      "accepted_count": 1
    },
    {
      "idx": 9,
      "t_ms": 207.6162,
      "dur_ms": 23.0685,
      "end_ms": 230.6846,
      "text": "ormation:\n",
      "token_texts": [
        "ormation:\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 10,
      "t_ms": 230.6846,
      "dur_ms": 23.0685,
      "end_ms": 253.7531,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 11,
      "t_ms": 253.7531,
      "dur_ms": 23.0685,
      "end_ms": 276.8216,
      "text": "-",
      "token_texts": [
        "-"
      ],
      "accepted_count": 1
    },
    {
      "idx": 12,
      "t_ms": 276.8216,
      "dur_ms": 23.0685,
      "end_ms": 299.89,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 13,
      "t_ms": 299.89,
      "dur_ms": 23.0685,
      "end_ms": 322.9585,
      "text": "Deepa ",
      "token_texts": [
        "Deepa "
      ],
      "accepted_count": 1
    },
    {
      "idx": 14,
      "t_ms": 322.9585,
      "dur_ms": 23.0685,
      "end_ms": 346.027,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 15,
      "t_ms": 346.027,
      "dur_ms": 23.0685,
      "end_ms": 369.0954,
      "text": "as ",
      "token_texts": [
        "as "
      ],
      "accepted_count": 1
    },
    {
      "idx": 16,
      "t_ms": 369.0954,
      "dur_ms": 23.0685,
      "end_ms": 392.1639,
      "text": "seen ",
      "token_texts": [
        "seen "
      ],
      "accepted_count": 1
    },
    {
      "idx": 17,
      "t_ms": 392.1639,
      "dur_ms": 23.0685,
      "end_ms": 415.2323,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 18,
      "t_ms": 415.2323,
      "dur_ms": 23.0685,
      "end_ms": 438.3008,
      "text": "*9** ",
      "token_texts": [
        "*9** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 19,
      "t_ms": 438.3008,
      "dur_ms": 23.0685,
      "end_ms": 461.3693,
      "text": "F",
      "token_texts": [
        "F"
      ],
      "accepted_count": 1
    },
    {
      "idx": 20,
      "t_ms": 461.3693,
      "dur_ms": 23.0685,
      "end_ms": 484.4377,
      "text": "ast ",
      "token_texts": [
        "ast "
      ],
      "accepted_count": 1
    },
    {
      "idx": 21,
      "t_ms": 484.4377,
      "dur_ms": 23.0685,
      "end_ms": 507.5062,
      "text": "and ",
      "token_texts": [
        "and "
      ],
      "accepted_count": 1
    },
    {
      "idx": 22,
      "t_ms": 507.5062,
      "dur_ms": 23.0685,
      "end_ms": 530.5747,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 23,
      "t_ms": 530.5747,
      "dur_ms": 23.0685,
      "end_ms": 553.6431,
      "text": "he ",
      "token_texts": [
        "he "
      ],
      "accepted_count": 1
    },
    {
      "idx": 24,
      "t_ms": 553.6431,
      "dur_ms": 23.0685,
      "end_ms": 576.7116,
      "text": "Furious ",
      "token_texts": [
        "Furious "
      ],
      "accepted_count": 1
    },
    {
      "idx": 25,
      "t_ms": 576.7116,
      "dur_ms": 23.0685,
      "end_ms": 599.7801,
      "text": "m",
      "token_texts": [
        "m"
      ],
      "accepted_count": 1
    },
    {
      "idx": 26,
      "t_ms": 599.7801,
      "dur_ms": 23.0685,
      "end_ms": 622.8485,
      "text": "ovies.\n",
      "token_texts": [
        "ovies.\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 27,
      "t_ms": 622.8485,
      "dur_ms": 23.0685,
      "end_ms": 645.917,
      "text": "-",
      "token_texts": [
        "-"
      ],
      "accepted_count": 1
    },
    {
      "idx": 28,
      "t_ms": 645.917,
      "dur_ms": 23.0685,
      "end_ms": 668.9854,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 29,
      "t_ms": 668.9854,
      "dur_ms": 23.0685,
      "end_ms": 692.0539,
      "text": "S",
      "token_texts": [
        "S"
      ],
      "accepted_count": 1
    },
    {
      "idx": 30,
      "t_ms": 692.0539,
      "dur_ms": 23.0685,
      "end_ms": 715.1224,
      "text": "he ",
      "token_texts": [
        "he "
      ],
      "accepted_count": 1
    },
    {
      "idx": 31,
      "t_ms": 715.1224,
      "dur_ms": 23.0685,
      "end_ms": 738.1908,
      "text": "has ",
      "token_texts": [
        "has "
      ],
      "accepted_count": 1
    },
    {
      "idx": 32,
      "t_ms": 738.1908,
      "dur_ms": 23.0685,
      "end_ms": 761.2593,
      "text": "seen ",
      "token_texts": [
        "seen "
      ],
      "accepted_count": 1
    },
    {
      "idx": 33,
      "t_ms": 761.2593,
      "dur_ms": 23.0685,
      "end_ms": 784.3278,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 34,
      "t_ms": 784.3278,
      "dur_ms": 23.0685,
      "end_ms": 807.3962,
      "text": "*each ",
      "token_texts": [
        "*each "
      ],
      "accepted_count": 1
    },
    {
      "idx": 35,
      "t_ms": 807.3962,
      "dur_ms": 23.0685,
      "end_ms": 830.4647,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 36,
      "t_ms": 830.4647,
      "dur_ms": 23.0685,
      "end_ms": 853.5332,
      "text": "ne** ",
      "token_texts": [
        "ne** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 37,
      "t_ms": 853.5332,
      "dur_ms": 23.0685,
      "end_ms": 876.6016,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 38,
      "t_ms": 876.6016,
      "dur_ms": 23.0685,
      "end_ms": 899.6701,
      "text": "*three ",
      "token_texts": [
        "*three "
      ],
      "accepted_count": 1
    },
    {
      "idx": 39,
      "t_ms": 899.6701,
      "dur_ms": 23.0685,
      "end_ms": 922.7386,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 40,
      "t_ms": 922.7386,
      "dur_ms": 23.0685,
      "end_ms": 945.807,
      "text": "imes**.\n",
      "token_texts": [
        "imes**.\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 41,
      "t_ms": 945.807,
      "dur_ms": 23.0685,
      "end_ms": 968.8755,
      "text": "-",
      "token_texts": [
        "-"
      ],
      "accepted_count": 1
    },
    {
      "idx": 42,
      "t_ms": 968.8755,
      "dur_ms": 23.0685,
      "end_ms": 991.9439,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 43,
      "t_ms": 991.9439,
      "dur_ms": 23.0685,
      "end_ms": 1015.0124,
      "text": "S",
      "token_texts": [
        "S"
      ],
      "accepted_count": 1
    },
    {
      "idx": 44,
      "t_ms": 1015.0124,
      "dur_ms": 23.0685,
      "end_ms": 1038.0809,
      "text": "he ",
      "token_texts": [
        "he "
      ],
      "accepted_count": 1
    },
    {
      "idx": 45,
      "t_ms": 1038.0809,
      "dur_ms": 23.0685,
      "end_ms": 1061.1493,
      "text": "spent ",
      "token_texts": [
        "spent "
      ],
      "accepted_count": 1
    },
    {
      "idx": 46,
      "t_ms": 1061.1493,
      "dur_ms": 23.0685,
      "end_ms": 1084.2178,
      "text": "a",
      "token_texts": [
        "a"
      ],
      "accepted_count": 1
    },
    {
      "idx": 47,
      "t_ms": 1084.2178,
      "dur_ms": 23.0685,
      "end_ms": 1107.2863,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 48,
      "t_ms": 1107.2863,
      "dur_ms": 23.0685,
      "end_ms": 1130.3547,
      "text": "total ",
      "token_texts": [
        "total "
      ],
      "accepted_count": 1
    },
    {
      "idx": 49,
      "t_ms": 1130.3547,
      "dur_ms": 23.0685,
      "end_ms": 1153.4232,
      "text": "of ",
      "token_texts": [
        "of "
      ],
      "accepted_count": 1
    },
    {
      "idx": 50,
      "t_ms": 1153.4232,
      "dur_ms": 23.0685,
      "end_ms": 1176.4917,
      "text": "**$216** ",
      "token_texts": [
        "**$216** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 51,
      "t_ms": 1176.4917,
      "dur_ms": 23.0685,
      "end_ms": 1199.5601,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 52,
      "t_ms": 1199.5601,
      "dur_ms": 23.0685,
      "end_ms": 1222.6286,
      "text": "n",
      "token_texts": [
        "n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 53,
      "t_ms": 1222.6286,
      "dur_ms": 23.0685,
      "end_ms": 1245.697,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 54,
      "t_ms": 1245.697,
      "dur_ms": 23.0685,
      "end_ms": 1268.7655,
      "text": "tickets.\n",
      "token_texts": [
        "tickets.\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 55,
      "t_ms": 1268.7655,
      "dur_ms": 23.0685,
      "end_ms": 1291.834,
      "text": "-",
      "token_texts": [
        "-"
      ],
      "accepted_count": 1
    },
    {
      "idx": 56,
      "t_ms": 1291.834,
      "dur_ms": 23.0685,
      "end_ms": 1314.9024,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 57,
      "t_ms": 1314.9024,
      "dur_ms": 23.0685,
      "end_ms": 1337.9709,
      "text": "W",
      "token_texts": [
        "W"
      ],
      "accepted_count": 1
    },
    {
      "idx": 58,
      "t_ms": 1337.9709,
      "dur_ms": 23.0685,
      "end_ms": 1361.0394,
      "text": "e ",
      "token_texts": [
        "e "
      ],
      "accepted_count": 1
    },
    {
      "idx": 59,
      "t_ms": 1361.0394,
      "dur_ms": 23.0685,
      "end_ms": 1384.1078,
      "text": "are ",
      "token_texts": [
        "are "
      ],
      "accepted_count": 1
    },
    {
      "idx": 60,
      "t_ms": 1384.1078,
      "dur_ms": 23.0685,
      "end_ms": 1407.1763,
      "text": "asked ",
      "token_texts": [
        "asked "
      ],
      "accepted_count": 1
    },
    {
      "idx": 61,
      "t_ms": 1407.1763,
      "dur_ms": 23.0685,
      "end_ms": 1430.2448,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 62,
      "t_ms": 1430.2448,
      "dur_ms": 23.0685,
      "end_ms": 1453.3132,
      "text": "o ",
      "token_texts": [
        "o "
      ],
      "accepted_count": 1
    },
    {
      "idx": 63,
      "t_ms": 1453.3132,
      "dur_ms": 23.0685,
      "end_ms": 1476.3817,
      "text": "find ",
      "token_texts": [
        "find "
      ],
      "accepted_count": 1
    },
    {
      "idx": 64,
      "t_ms": 1476.3817,
      "dur_ms": 23.0685,
      "end_ms": 1499.4501,
      "text": "the ",
      "token_texts": [
        "the "
      ],
      "accepted_count": 1
    },
    {
      "idx": 65,
      "t_ms": 1499.4501,
      "dur_ms": 23.0685,
      "end_ms": 1522.5186,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 66,
      "t_ms": 1522.5186,
      "dur_ms": 23.0685,
      "end_ms": 1545.5871,
      "text": "*average ",
      "token_texts": [
        "*average "
      ],
      "accepted_count": 1
    },
    {
      "idx": 67,
      "t_ms": 1545.5871,
      "dur_ms": 23.0685,
      "end_ms": 1568.6555,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 68,
      "t_ms": 1568.6555,
      "dur_ms": 23.0685,
      "end_ms": 1591.724,
      "text": "r",
      "token_texts": [
        "r"
      ],
      "accepted_count": 1
    },
    {
      "idx": 69,
      "t_ms": 1591.724,
      "dur_ms": 23.0685,
      "end_ms": 1614.7925,
      "text": "ice ",
      "token_texts": [
        "ice "
      ],
      "accepted_count": 1
    },
    {
      "idx": 70,
      "t_ms": 1614.7925,
      "dur_ms": 23.0685,
      "end_ms": 1637.8609,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 71,
      "t_ms": 1637.8609,
      "dur_ms": 23.0685,
      "end_ms": 1660.9294,
      "text": "er ",
      "token_texts": [
        "er "
      ],
      "accepted_count": 1
    },
    {
      "idx": 72,
      "t_ms": 1660.9294,
      "dur_ms": 23.0685,
      "end_ms": 1683.9979,
      "text": "ticket**.\n",
      "token_texts": [
        "ticket**.\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 73,
      "t_ms": 1683.9979,
      "dur_ms": 23.0685,
      "end_ms": 1707.0663,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 74,
      "t_ms": 1707.0663,
      "dur_ms": 23.0685,
      "end_ms": 1730.1348,
      "text": "-",
      "token_texts": [
        "-"
      ],
      "accepted_count": 1
    },
    {
      "idx": 75,
      "t_ms": 1730.1348,
      "dur_ms": 23.0685,
      "end_ms": 1753.2032,
      "text": "-",
      "token_texts": [
        "-"
      ],
      "accepted_count": 1
    },
    {
      "idx": 76,
      "t_ms": 1753.2032,
      "dur_ms": 23.0685,
      "end_ms": 1776.2717,
      "text": "-\n",
      "token_texts": [
        "-\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 77,
      "t_ms": 1776.2717,
      "dur_ms": 23.0685,
      "end_ms": 1799.3402,
      "text": "\n### ",
      "token_texts": [
        "\n### "
      ],
      "accepted_count": 1
    },
    {
      "idx": 78,
      "t_ms": 1799.3402,
      "dur_ms": 23.0685,
      "end_ms": 1822.4086,
      "text": "Step ",
      "token_texts": [
        "Step "
      ],
      "accepted_count": 1
    },
    {
      "idx": 79,
      "t_ms": 1822.4086,
      "dur_ms": 23.0685,
      "end_ms": 1845.4771,
      "text": "1",
      "token_texts": [
        "1"
      ],
      "accepted_count": 1
    },
    {
      "idx": 80,
      "t_ms": 1845.4771,
      "dur_ms": 23.0685,
      "end_ms": 1868.5456,
      "text": ": ",
      "token_texts": [
        ": "
      ],
      "accepted_count": 1
    },
    {
      "idx": 81,
      "t_ms": 1868.5456,
      "dur_ms": 23.0685,
      "end_ms": 1891.614,
      "text": "Find ",
      "token_texts": [
        "Find "
      ],
      "accepted_count": 1
    },
    {
      "idx": 82,
      "t_ms": 1891.614,
      "dur_ms": 23.0685,
      "end_ms": 1914.6825,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 83,
      "t_ms": 1914.6825,
      "dur_ms": 23.0685,
      "end_ms": 1937.751,
      "text": "he ",
      "token_texts": [
        "he "
      ],
      "accepted_count": 1
    },
    {
      "idx": 84,
      "t_ms": 1937.751,
      "dur_ms": 23.0685,
      "end_ms": 1960.8194,
      "text": "total ",
      "token_texts": [
        "total "
      ],
      "accepted_count": 1
    },
    {
      "idx": 85,
      "t_ms": 1960.8194,
      "dur_ms": 23.0685,
      "end_ms": 1983.8879,
      "text": "n",
      "token_texts": [
        "n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 86,
      "t_ms": 1983.8879,
      "dur_ms": 23.0685,
      "end_ms": 2006.9563,
      "text": "umber ",
      "token_texts": [
        "umber "
      ],
      "accepted_count": 1
    },
    {
      "idx": 87,
      "t_ms": 2006.9563,
      "dur_ms": 23.0685,
      "end_ms": 2030.0248,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 88,
      "t_ms": 2030.0248,
      "dur_ms": 23.0685,
      "end_ms": 2053.0933,
      "text": "f ",
      "token_texts": [
        "f "
      ],
      "accepted_count": 1
    },
    {
      "idx": 89,
      "t_ms": 2053.0933,
      "dur_ms": 23.0685,
      "end_ms": 2076.1617,
      "text": "tickets ",
      "token_texts": [
        "tickets "
      ],
      "accepted_count": 1
    },
    {
      "idx": 90,
      "t_ms": 2076.1617,
      "dur_ms": 23.0685,
      "end_ms": 2099.2302,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 91,
      "t_ms": 2099.2302,
      "dur_ms": 23.0685,
      "end_ms": 2122.2987,
      "text": "he ",
      "token_texts": [
        "he "
      ],
      "accepted_count": 1
    },
    {
      "idx": 92,
      "t_ms": 2122.2987,
      "dur_ms": 23.0685,
      "end_ms": 2145.3671,
      "text": "b",
      "token_texts": [
        "b"
      ],
      "accepted_count": 1
    },
    {
      "idx": 93,
      "t_ms": 2145.3671,
      "dur_ms": 23.0685,
      "end_ms": 2168.4356,
      "text": "ought\n",
      "token_texts": [
        "ought\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 94,
      "t_ms": 2168.4356,
      "dur_ms": 23.0685,
      "end_ms": 2191.5041,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 95,
      "t_ms": 2191.5041,
      "dur_ms": 23.0685,
      "end_ms": 2214.5725,
      "text": "She ",
      "token_texts": [
        "She "
      ],
      "accepted_count": 1
    },
    {
      "idx": 96,
      "t_ms": 2214.5725,
      "dur_ms": 23.0685,
      "end_ms": 2237.641,
      "text": "saw ",
      "token_texts": [
        "saw "
      ],
      "accepted_count": 1
    },
    {
      "idx": 97,
      "t_ms": 2237.641,
      "dur_ms": 23.0685,
      "end_ms": 2260.7094,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 98,
      "t_ms": 2260.7094,
      "dur_ms": 23.0685,
      "end_ms": 2283.7779,
      "text": "*9 ",
      "token_texts": [
        "*9 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 99,
      "t_ms": 2283.7779,
      "dur_ms": 23.0685,
      "end_ms": 2306.8464,
      "text": "movies**, ",
      "token_texts": [
        "movies**, "
      ],
      "accepted_count": 1
    },
    {
      "idx": 100,
      "t_ms": 2306.8464,
      "dur_ms": 23.0685,
      "end_ms": 2329.9148,
      "text": "a",
      "token_texts": [
        "a"
      ],
      "accepted_count": 1
    },
    {
      "idx": 101,
      "t_ms": 2329.9148,
      "dur_ms": 23.0685,
      "end_ms": 2352.9833,
      "text": "n",
      "token_texts": [
        "n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 102,
      "t_ms": 2352.9833,
      "dur_ms": 23.0685,
      "end_ms": 2376.0518,
      "text": "d ",
      "token_texts": [
        "d "
      ],
      "accepted_count": 1
    },
    {
      "idx": 103,
      "t_ms": 2376.0518,
      "dur_ms": 23.0685,
      "end_ms": 2399.1202,
      "text": "each ",
      "token_texts": [
        "each "
      ],
      "accepted_count": 1
    },
    {
      "idx": 104,
      "t_ms": 2399.1202,
      "dur_ms": 23.0685,
      "end_ms": 2422.1887,
      "text": "w",
      "token_texts": [
        "w"
      ],
      "accepted_count": 1
    },
    {
      "idx": 105,
      "t_ms": 2422.1887,
      "dur_ms": 23.0685,
      "end_ms": 2445.2572,
      "text": "as ",
      "token_texts": [
        "as "
      ],
      "accepted_count": 1
    },
    {
      "idx": 106,
      "t_ms": 2445.2572,
      "dur_ms": 23.0685,
      "end_ms": 2468.3256,
      "text": "seen ",
      "token_texts": [
        "seen "
      ],
      "accepted_count": 1
    },
    {
      "idx": 107,
      "t_ms": 2468.3256,
      "dur_ms": 23.0685,
      "end_ms": 2491.3941,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 108,
      "t_ms": 2491.3941,
      "dur_ms": 23.0685,
      "end_ms": 2514.4625,
      "text": "*3 ",
      "token_texts": [
        "*3 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 109,
      "t_ms": 2514.4625,
      "dur_ms": 23.0685,
      "end_ms": 2537.531,
      "text": "times**:\n",
      "token_texts": [
        "times**:\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 110,
      "t_ms": 2537.531,
      "dur_ms": 23.0685,
      "end_ms": 2560.5995,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 111,
      "t_ms": 2560.5995,
      "dur_ms": 23.0685,
      "end_ms": 2583.6679,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 112,
      "t_ms": 2583.6679,
      "dur_ms": 23.0685,
      "end_ms": 2606.7364,
      "text": "$\n",
      "token_texts": [
        "$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 113,
      "t_ms": 2606.7364,
      "dur_ms": 23.0685,
      "end_ms": 2629.8049,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 114,
      "t_ms": 2629.8049,
      "dur_ms": 23.0685,
      "end_ms": 2652.8733,
      "text": "text{Total ",
      "token_texts": [
        "text{Total "
      ],
      "accepted_count": 1
    },
    {
      "idx": 115,
      "t_ms": 2652.8733,
      "dur_ms": 23.0685,
      "end_ms": 2675.9418,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 116,
      "t_ms": 2675.9418,
      "dur_ms": 23.0685,
      "end_ms": 2699.0103,
      "text": "i",
      "token_texts": [
        "i"
      ],
      "accepted_count": 1
    },
    {
      "idx": 117,
      "t_ms": 2699.0103,
      "dur_ms": 23.0685,
      "end_ms": 2722.0787,
      "text": "ckets} ",
      "token_texts": [
        "ckets} "
      ],
      "accepted_count": 1
    },
    {
      "idx": 118,
      "t_ms": 2722.0787,
      "dur_ms": 23.0685,
      "end_ms": 2745.1472,
      "text": "=",
      "token_texts": [
        "="
      ],
      "accepted_count": 1
    },
    {
      "idx": 119,
      "t_ms": 2745.1472,
      "dur_ms": 23.0685,
      "end_ms": 2768.2157,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 120,
      "t_ms": 2768.2157,
      "dur_ms": 23.0685,
      "end_ms": 2791.2841,
      "text": "9",
      "token_texts": [
        "9"
      ],
      "accepted_count": 1
    },
    {
      "idx": 121,
      "t_ms": 2791.2841,
      "dur_ms": 23.0685,
      "end_ms": 2814.3526,
      "text": " \\times ",
      "token_texts": [
        " \\times "
      ],
      "accepted_count": 1
    },
    {
      "idx": 122,
      "t_ms": 2814.3526,
      "dur_ms": 23.0685,
      "end_ms": 2837.421,
      "text": "3",
      "token_texts": [
        "3"
      ],
      "accepted_count": 1
    },
    {
      "idx": 123,
      "t_ms": 2837.421,
      "dur_ms": 23.0685,
      "end_ms": 2860.4895,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 124,
      "t_ms": 2860.4895,
      "dur_ms": 23.0685,
      "end_ms": 2883.558,
      "text": "= ",
      "token_texts": [
        "= "
      ],
      "accepted_count": 1
    },
    {
      "idx": 125,
      "t_ms": 2883.558,
      "dur_ms": 23.0685,
      "end_ms": 2906.6264,
      "text": "27\n",
      "token_texts": [
        "27\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 126,
      "t_ms": 2906.6264,
      "dur_ms": 23.0685,
      "end_ms": 2929.6949,
      "text": "$$\n",
      "token_texts": [
        "$$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 127,
      "t_ms": 2929.6949,
      "dur_ms": 23.0685,
      "end_ms": 2952.7634,
      "text": "\n---\n",
      "token_texts": [
        "\n---\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 128,
      "t_ms": 2952.7634,
      "dur_ms": 23.0685,
      "end_ms": 2975.8318,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 129,
      "t_ms": 2975.8318,
      "dur_ms": 23.0685,
      "end_ms": 2998.9003,
      "text": "### ",
      "token_texts": [
        "### "
      ],
      "accepted_count": 1
    },
    {
      "idx": 130,
      "t_ms": 2998.9003,
      "dur_ms": 23.0685,
      "end_ms": 3021.9688,
      "text": "Step ",
      "token_texts": [
        "Step "
      ],
      "accepted_count": 1
    },
    {
      "idx": 131,
      "t_ms": 3021.9688,
      "dur_ms": 23.0685,
      "end_ms": 3045.0372,
      "text": "2: ",
      "token_texts": [
        "2: "
      ],
      "accepted_count": 1
    },
    {
      "idx": 132,
      "t_ms": 3045.0372,
      "dur_ms": 23.0685,
      "end_ms": 3068.1057,
      "text": "Find ",
      "token_texts": [
        "Find "
      ],
      "accepted_count": 1
    },
    {
      "idx": 133,
      "t_ms": 3068.1057,
      "dur_ms": 23.0685,
      "end_ms": 3091.1741,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 134,
      "t_ms": 3091.1741,
      "dur_ms": 23.0685,
      "end_ms": 3114.2426,
      "text": "he ",
      "token_texts": [
        "he "
      ],
      "accepted_count": 1
    },
    {
      "idx": 135,
      "t_ms": 3114.2426,
      "dur_ms": 23.0685,
      "end_ms": 3137.3111,
      "text": "average ",
      "token_texts": [
        "average "
      ],
      "accepted_count": 1
    },
    {
      "idx": 136,
      "t_ms": 3137.3111,
      "dur_ms": 23.0685,
      "end_ms": 3160.3795,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 137,
      "t_ms": 3160.3795,
      "dur_ms": 23.0685,
      "end_ms": 3183.448,
      "text": "r",
      "token_texts": [
        "r"
      ],
      "accepted_count": 1
    },
    {
      "idx": 138,
      "t_ms": 3183.448,
      "dur_ms": 23.0685,
      "end_ms": 3206.5165,
      "text": "ice ",
      "token_texts": [
        "ice "
      ],
      "accepted_count": 1
    },
    {
      "idx": 139,
      "t_ms": 3206.5165,
      "dur_ms": 23.0685,
      "end_ms": 3229.5849,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 140,
      "t_ms": 3229.5849,
      "dur_ms": 23.0685,
      "end_ms": 3252.6534,
      "text": "er ",
      "token_texts": [
        "er "
      ],
      "accepted_count": 1
    },
    {
      "idx": 141,
      "t_ms": 3252.6534,
      "dur_ms": 23.0685,
      "end_ms": 3275.7219,
      "text": "ticket\n",
      "token_texts": [
        "ticket\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 142,
      "t_ms": 3275.7219,
      "dur_ms": 23.0685,
      "end_ms": 3298.7903,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 143,
      "t_ms": 3298.7903,
      "dur_ms": 23.0685,
      "end_ms": 3321.8588,
      "text": "She ",
      "token_texts": [
        "She "
      ],
      "accepted_count": 1
    },
    {
      "idx": 144,
      "t_ms": 3321.8588,
      "dur_ms": 23.0685,
      "end_ms": 3344.9272,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 145,
      "t_ms": 3344.9272,
      "dur_ms": 23.0685,
      "end_ms": 3367.9957,
      "text": "pent ",
      "token_texts": [
        "pent "
      ],
      "accepted_count": 1
    },
    {
      "idx": 146,
      "t_ms": 3367.9957,
      "dur_ms": 23.0685,
      "end_ms": 3391.0642,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 147,
      "t_ms": 3391.0642,
      "dur_ms": 23.0685,
      "end_ms": 3414.1326,
      "text": "*$216** ",
      "token_texts": [
        "*$216** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 148,
      "t_ms": 3414.1326,
      "dur_ms": 23.0685,
      "end_ms": 3437.2011,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 149,
      "t_ms": 3437.2011,
      "dur_ms": 23.0685,
      "end_ms": 3460.2696,
      "text": "n",
      "token_texts": [
        "n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 150,
      "t_ms": 3460.2696,
      "dur_ms": 23.0685,
      "end_ms": 3483.338,
      "text": " **27 ",
      "token_texts": [
        " **27 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 151,
      "t_ms": 3483.338,
      "dur_ms": 23.0685,
      "end_ms": 3506.4065,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 152,
      "t_ms": 3506.4065,
      "dur_ms": 23.0685,
      "end_ms": 3529.475,
      "text": "ickets**. ",
      "token_texts": [
        "ickets**. "
      ],
      "accepted_count": 1
    },
    {
      "idx": 153,
      "t_ms": 3529.475,
      "dur_ms": 23.0685,
      "end_ms": 3552.5434,
      "text": "T",
      "token_texts": [
        "T"
      ],
      "accepted_count": 1
    },
    {
      "idx": 154,
      "t_ms": 3552.5434,
      "dur_ms": 23.0685,
      "end_ms": 3575.6119,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 155,
      "t_ms": 3575.6119,
      "dur_ms": 23.0685,
      "end_ms": 3598.6803,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 156,
      "t_ms": 3598.6803,
      "dur_ms": 23.0685,
      "end_ms": 3621.7488,
      "text": "find ",
      "token_texts": [
        "find "
      ],
      "accepted_count": 1
    },
    {
      "idx": 157,
      "t_ms": 3621.7488,
      "dur_ms": 23.0685,
      "end_ms": 3644.8173,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 158,
      "t_ms": 3644.8173,
      "dur_ms": 23.0685,
      "end_ms": 3667.8857,
      "text": "he ",
      "token_texts": [
        "he "
      ],
      "accepted_count": 1
    },
    {
      "idx": 159,
      "t_ms": 3667.8857,
      "dur_ms": 23.0685,
      "end_ms": 3690.9542,
      "text": "average ",
      "token_texts": [
        "average "
      ],
      "accepted_count": 1
    },
    {
      "idx": 160,
      "t_ms": 3690.9542,
      "dur_ms": 23.0685,
      "end_ms": 3714.0227,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 161,
      "t_ms": 3714.0227,
      "dur_ms": 23.0685,
      "end_ms": 3737.0911,
      "text": "r",
      "token_texts": [
        "r"
      ],
      "accepted_count": 1
    },
    {
      "idx": 162,
      "t_ms": 3737.0911,
      "dur_ms": 23.0685,
      "end_ms": 3760.1596,
      "text": "ice ",
      "token_texts": [
        "ice "
      ],
      "accepted_count": 1
    },
    {
      "idx": 163,
      "t_ms": 3760.1596,
      "dur_ms": 23.0685,
      "end_ms": 3783.2281,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 164,
      "t_ms": 3783.2281,
      "dur_ms": 23.0685,
      "end_ms": 3806.2965,
      "text": "er ",
      "token_texts": [
        "er "
      ],
      "accepted_count": 1
    },
    {
      "idx": 165,
      "t_ms": 3806.2965,
      "dur_ms": 23.0685,
      "end_ms": 3829.365,
      "text": "ticket:\n",
      "token_texts": [
        "ticket:\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 166,
      "t_ms": 3829.365,
      "dur_ms": 23.0685,
      "end_ms": 3852.4334,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 167,
      "t_ms": 3852.4334,
      "dur_ms": 23.0685,
      "end_ms": 3875.5019,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 168,
      "t_ms": 3875.5019,
      "dur_ms": 23.0685,
      "end_ms": 3898.5704,
      "text": "$\n",
      "token_texts": [
        "$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 169,
      "t_ms": 3898.5704,
      "dur_ms": 23.0685,
      "end_ms": 3921.6388,
      "text": "\\t",
      "token_texts": [
        "\\t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 170,
      "t_ms": 3921.6388,
      "dur_ms": 23.0685,
      "end_ms": 3944.7073,
      "text": "ext{Average ",
      "token_texts": [
        "ext{Average "
      ],
      "accepted_count": 1
    },
    {
      "idx": 171,
      "t_ms": 3944.7073,
      "dur_ms": 23.0685,
      "end_ms": 3967.7758,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 172,
      "t_ms": 3967.7758,
      "dur_ms": 23.0685,
      "end_ms": 3990.8442,
      "text": "r",
      "token_texts": [
        "r"
      ],
      "accepted_count": 1
    },
    {
      "idx": 173,
      "t_ms": 3990.8442,
      "dur_ms": 23.0685,
      "end_ms": 4013.9127,
      "text": "ice ",
      "token_texts": [
        "ice "
      ],
      "accepted_count": 1
    },
    {
      "idx": 174,
      "t_ms": 4013.9127,
      "dur_ms": 23.0685,
      "end_ms": 4036.9812,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 175,
      "t_ms": 4036.9812,
      "dur_ms": 23.0685,
      "end_ms": 4060.0496,
      "text": "er ",
      "token_texts": [
        "er "
      ],
      "accepted_count": 1
    },
    {
      "idx": 176,
      "t_ms": 4060.0496,
      "dur_ms": 23.0685,
      "end_ms": 4083.1181,
      "text": "ticket} ",
      "token_texts": [
        "ticket} "
      ],
      "accepted_count": 1
    },
    {
      "idx": 177,
      "t_ms": 4083.1181,
      "dur_ms": 23.0685,
      "end_ms": 4106.1865,
      "text": "=",
      "token_texts": [
        "="
      ],
      "accepted_count": 1
    },
    {
      "idx": 178,
      "t_ms": 4106.1865,
      "dur_ms": 23.0685,
      "end_ms": 4129.255,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 179,
      "t_ms": 4129.255,
      "dur_ms": 23.0685,
      "end_ms": 4152.3235,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 180,
      "t_ms": 4152.3235,
      "dur_ms": 23.0685,
      "end_ms": 4175.3919,
      "text": "f",
      "token_texts": [
        "f"
      ],
      "accepted_count": 1
    },
    {
      "idx": 181,
      "t_ms": 4175.3919,
      "dur_ms": 23.0685,
      "end_ms": 4198.4604,
      "text": "rac",
      "token_texts": [
        "rac"
      ],
      "accepted_count": 1
    },
    {
      "idx": 182,
      "t_ms": 4198.4604,
      "dur_ms": 23.0685,
      "end_ms": 4221.5289,
      "text": "{\\text{Total ",
      "token_texts": [
        "{\\text{Total "
      ],
      "accepted_count": 1
    },
    {
      "idx": 183,
      "t_ms": 4221.5289,
      "dur_ms": 23.0685,
      "end_ms": 4244.5973,
      "text": "c",
      "token_texts": [
        "c"
      ],
      "accepted_count": 1
    },
    {
      "idx": 184,
      "t_ms": 4244.5973,
      "dur_ms": 23.0685,
      "end_ms": 4267.6658,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 185,
      "t_ms": 4267.6658,
      "dur_ms": 23.0685,
      "end_ms": 4290.7343,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 186,
      "t_ms": 4290.7343,
      "dur_ms": 23.0685,
      "end_ms": 4313.8027,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 187,
      "t_ms": 4313.8027,
      "dur_ms": 23.0685,
      "end_ms": 4336.8712,
      "text": "}}",
      "token_texts": [
        "}}"
      ],
      "accepted_count": 1
    },
    {
      "idx": 188,
      "t_ms": 4336.8712,
      "dur_ms": 23.0685,
      "end_ms": 4359.9397,
      "text": "{\\text{Number ",
      "token_texts": [
        "{\\text{Number "
      ],
      "accepted_count": 1
    },
    {
      "idx": 189,
      "t_ms": 4359.9397,
      "dur_ms": 23.0685,
      "end_ms": 4383.0081,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 190,
      "t_ms": 4383.0081,
      "dur_ms": 23.0685,
      "end_ms": 4406.0766,
      "text": "f",
      "token_texts": [
        "f"
      ],
      "accepted_count": 1
    },
    {
      "idx": 191,
      "t_ms": 4406.0766,
      "dur_ms": 23.0685,
      "end_ms": 4429.145,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 192,
      "t_ms": 4429.145,
      "dur_ms": 23.0685,
      "end_ms": 4452.2135,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 193,
      "t_ms": 4452.2135,
      "dur_ms": 23.0685,
      "end_ms": 4475.282,
      "text": "ickets}} ",
      "token_texts": [
        "ickets}} "
      ],
      "accepted_count": 1
    },
    {
      "idx": 194,
      "t_ms": 4475.282,
      "dur_ms": 23.0685,
      "end_ms": 4498.3504,
      "text": "=",
      "token_texts": [
        "="
      ],
      "accepted_count": 1
    },
    {
      "idx": 195,
      "t_ms": 4498.3504,
      "dur_ms": 23.0685,
      "end_ms": 4521.4189,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 196,
      "t_ms": 4521.4189,
      "dur_ms": 23.0685,
      "end_ms": 4544.4874,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 197,
      "t_ms": 4544.4874,
      "dur_ms": 23.0685,
      "end_ms": 4567.5558,
      "text": "fr",
      "token_texts": [
        "fr"
      ],
      "accepted_count": 1
    },
    {
      "idx": 198,
      "t_ms": 4567.5558,
      "dur_ms": 23.0685,
      "end_ms": 4590.6243,
      "text": "ac{216}{27}\n",
      "token_texts": [
        "ac{216}{27}\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 199,
      "t_ms": 4590.6243,
      "dur_ms": 23.0685,
      "end_ms": 4613.6928,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 200,
      "t_ms": 4613.6928,
      "dur_ms": 23.0685,
      "end_ms": 4636.7612,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 201,
      "t_ms": 4636.7612,
      "dur_ms": 23.0685,
      "end_ms": 4659.8297,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 202,
      "t_ms": 4659.8297,
      "dur_ms": 23.0685,
      "end_ms": 4682.8981,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 203,
      "t_ms": 4682.8981,
      "dur_ms": 23.0685,
      "end_ms": 4705.9666,
      "text": "$$\n",
      "token_texts": [
        "$$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 204,
      "t_ms": 4705.9666,
      "dur_ms": 23.0685,
      "end_ms": 4729.0351,
      "text": "\\fr",
      "token_texts": [
        "\\fr"
      ],
      "accepted_count": 1
    },
    {
      "idx": 205,
      "t_ms": 4729.0351,
      "dur_ms": 23.0685,
      "end_ms": 4752.1035,
      "text": "ac{216}{27} ",
      "token_texts": [
        "ac{216}{27} "
      ],
      "accepted_count": 1
    },
    {
      "idx": 206,
      "t_ms": 4752.1035,
      "dur_ms": 23.0685,
      "end_ms": 4775.172,
      "text": "=",
      "token_texts": [
        "="
      ],
      "accepted_count": 1
    },
    {
      "idx": 207,
      "t_ms": 4775.172,
      "dur_ms": 23.0685,
      "end_ms": 4798.2405,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 208,
      "t_ms": 4798.2405,
      "dur_ms": 23.0685,
      "end_ms": 4821.3089,
      "text": "8",
      "token_texts": [
        "8"
      ],
      "accepted_count": 1
    },
    {
      "idx": 209,
      "t_ms": 4821.3089,
      "dur_ms": 23.0685,
      "end_ms": 4844.3774,
      "text": "\n$$\n",
      "token_texts": [
        "\n$$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 210,
      "t_ms": 4844.3774,
      "dur_ms": 23.0685,
      "end_ms": 4867.4459,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 211,
      "t_ms": 4867.4459,
      "dur_ms": 23.0685,
      "end_ms": 4890.5143,
      "text": "---\n",
      "token_texts": [
        "---\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 212,
      "t_ms": 4890.5143,
      "dur_ms": 23.0685,
      "end_ms": 4913.5828,
      "text": "\n### ",
      "token_texts": [
        "\n### "
      ],
      "accepted_count": 1
    },
    {
      "idx": 213,
      "t_ms": 4913.5828,
      "dur_ms": 23.0685,
      "end_ms": 4936.6512,
      "text": "✅",
      "token_texts": [
        "✅"
      ],
      "accepted_count": 1
    },
    {
      "idx": 214,
      "t_ms": 4936.6512,
      "dur_ms": 23.0685,
      "end_ms": 4959.7197,
      "text": " Final ",
      "token_texts": [
        " Final "
      ],
      "accepted_count": 1
    },
    {
      "idx": 215,
      "t_ms": 4959.7197,
      "dur_ms": 23.0685,
      "end_ms": 4982.7882,
      "text": "A",
      "token_texts": [
        "A"
      ],
      "accepted_count": 1
    },
    {
      "idx": 216,
      "t_ms": 4982.7882,
      "dur_ms": 23.0685,
      "end_ms": 5005.8566,
      "text": "nswer:\n",
      "token_texts": [
        "nswer:\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 217,
      "t_ms": 5005.8566,
      "dur_ms": 23.0685,
      "end_ms": 5028.9251,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 218,
      "t_ms": 5028.9251,
      "dur_ms": 23.0685,
      "end_ms": 5051.9936,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 219,
      "t_ms": 5051.9936,
      "dur_ms": 23.0685,
      "end_ms": 5075.062,
      "text": "$\n",
      "token_texts": [
        "$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 220,
      "t_ms": 5075.062,
      "dur_ms": 23.0685,
      "end_ms": 5098.1305,
      "text": "\\boxed{8}\n",
      "token_texts": [
        "\\boxed{8}\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 221,
      "t_ms": 5098.1305,
      "dur_ms": 23.0685,
      "end_ms": 5121.199,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 222,
      "t_ms": 5121.199,
      "dur_ms": 23.0685,
      "end_ms": 5144.2674,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 223,
      "t_ms": 5144.2674,
      "dur_ms": 23.0685,
      "end_ms": 5167.3359,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 224,
      "t_ms": 5167.3359,
      "dur_ms": 23.0685,
      "end_ms": 5190.4043,
      "text": "\nSo, ",
      "token_texts": [
        "\nSo, "
      ],
      "accepted_count": 1
    },
    {
      "idx": 225,
      "t_ms": 5190.4043,
      "dur_ms": 23.0685,
      "end_ms": 5213.4728,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 226,
      "t_ms": 5213.4728,
      "dur_ms": 23.0685,
      "end_ms": 5236.5413,
      "text": "he ",
      "token_texts": [
        "he "
      ],
      "accepted_count": 1
    },
    {
      "idx": 227,
      "t_ms": 5236.5413,
      "dur_ms": 23.0685,
      "end_ms": 5259.6097,
      "text": "**average ",
      "token_texts": [
        "**average "
      ],
      "accepted_count": 1
    },
    {
      "idx": 228,
      "t_ms": 5259.6097,
      "dur_ms": 23.0685,
      "end_ms": 5282.6782,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 229,
      "t_ms": 5282.6782,
      "dur_ms": 23.0685,
      "end_ms": 5305.7467,
      "text": "r",
      "token_texts": [
        "r"
      ],
      "accepted_count": 1
    },
    {
      "idx": 230,
      "t_ms": 5305.7467,
      "dur_ms": 23.0685,
      "end_ms": 5328.8151,
      "text": "ice ",
      "token_texts": [
        "ice "
      ],
      "accepted_count": 1
    },
    {
      "idx": 231,
      "t_ms": 5328.8151,
      "dur_ms": 23.0685,
      "end_ms": 5351.8836,
      "text": "p",
      "token_texts": [
        "p"
      ],
      "accepted_count": 1
    },
    {
      "idx": 232,
      "t_ms": 5351.8836,
      "dur_ms": 23.0685,
      "end_ms": 5374.9521,
      "text": "er ",
      "token_texts": [
        "er "
      ],
      "accepted_count": 1
    },
    {
      "idx": 233,
      "t_ms": 5374.9521,
      "dur_ms": 23.0685,
      "end_ms": 5398.0205,
      "text": "ticket** ",
      "token_texts": [
        "ticket** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 234,
      "t_ms": 5398.0205,
      "dur_ms": 23.0685,
      "end_ms": 5421.089,
      "text": "i",
      "token_texts": [
        "i"
      ],
      "accepted_count": 1
    },
    {
      "idx": 235,
      "t_ms": 5421.089,
      "dur_ms": 23.0685,
      "end_ms": 5444.1574,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 236,
      "t_ms": 5444.1574,
      "dur_ms": 23.0685,
      "end_ms": 5467.2259,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 237,
      "t_ms": 5467.2259,
      "dur_ms": 23.0685,
      "end_ms": 5490.2944,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 238,
      "t_ms": 5490.2944,
      "dur_ms": 23.0685,
      "end_ms": 5513.3628,
      "text": "*$8",
      "token_texts": [
        "*$8"
      ],
      "accepted_count": 1
    },
    {
      "idx": 239,
      "t_ms": 5513.3628,
      "dur_ms": 23.0685,
      "end_ms": 5536.4313,
      "text": "**.",
      "token_texts": [
        "**."
      ],
      "accepted_count": 1
    }
  ],
  "totals": {
    "tokens": 240,
    "wall_ms": 5536.44,
    "tps": 43.349
  }
});
