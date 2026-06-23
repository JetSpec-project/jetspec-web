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
      "note": "MEASURED: per-method throughput (tok/s), token count, accepted-length and answer text are measured on NVIDIA B200 (GSM8K, Qwen3-8B). Token-level pacing within each lane is reconstructed from the measured throughput (aggregate speed is recorded, not per-token wall-clock); relative lane speeds are preserved. Export decode_time_s=4.3153s (inconsistent with tps for spec lanes; race timed by tps).",
      "target_tps": 49.336,
      "measured_tps": 49.336,
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
      "dur_ms": 20.269,
      "end_ms": 20.269,
      "text": "Let's ",
      "token_texts": [
        "Let's "
      ],
      "accepted_count": 1
    },
    {
      "idx": 1,
      "t_ms": 20.269,
      "dur_ms": 20.269,
      "end_ms": 40.5379,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 2,
      "t_ms": 40.5379,
      "dur_ms": 20.269,
      "end_ms": 60.8069,
      "text": "olve ",
      "token_texts": [
        "olve "
      ],
      "accepted_count": 1
    },
    {
      "idx": 3,
      "t_ms": 60.8069,
      "dur_ms": 20.269,
      "end_ms": 81.0759,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 4,
      "t_ms": 81.0759,
      "dur_ms": 20.269,
      "end_ms": 101.3449,
      "text": "his ",
      "token_texts": [
        "his "
      ],
      "accepted_count": 1
    },
    {
      "idx": 5,
      "t_ms": 101.3449,
      "dur_ms": 20.269,
      "end_ms": 121.6138,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 6,
      "t_ms": 121.6138,
      "dur_ms": 20.269,
      "end_ms": 141.8828,
      "text": "tep ",
      "token_texts": [
        "tep "
      ],
      "accepted_count": 1
    },
    {
      "idx": 7,
      "t_ms": 141.8828,
      "dur_ms": 20.269,
      "end_ms": 162.1518,
      "text": "b",
      "token_texts": [
        "b"
      ],
      "accepted_count": 1
    },
    {
      "idx": 8,
      "t_ms": 162.1518,
      "dur_ms": 20.269,
      "end_ms": 182.4207,
      "text": "y ",
      "token_texts": [
        "y "
      ],
      "accepted_count": 1
    },
    {
      "idx": 9,
      "t_ms": 182.4207,
      "dur_ms": 20.269,
      "end_ms": 202.6897,
      "text": "step.\n",
      "token_texts": [
        "step.\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 10,
      "t_ms": 202.6897,
      "dur_ms": 20.269,
      "end_ms": 222.9587,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 11,
      "t_ms": 222.9587,
      "dur_ms": 20.269,
      "end_ms": 243.2276,
      "text": "-",
      "token_texts": [
        "-"
      ],
      "accepted_count": 1
    },
    {
      "idx": 12,
      "t_ms": 243.2276,
      "dur_ms": 20.269,
      "end_ms": 263.4966,
      "text": "--\n",
      "token_texts": [
        "--\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 13,
      "t_ms": 263.4966,
      "dur_ms": 20.269,
      "end_ms": 283.7656,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 14,
      "t_ms": 283.7656,
      "dur_ms": 20.269,
      "end_ms": 304.0346,
      "text": "### ",
      "token_texts": [
        "### "
      ],
      "accepted_count": 1
    },
    {
      "idx": 15,
      "t_ms": 304.0346,
      "dur_ms": 20.269,
      "end_ms": 324.3035,
      "text": "Step ",
      "token_texts": [
        "Step "
      ],
      "accepted_count": 1
    },
    {
      "idx": 16,
      "t_ms": 324.3035,
      "dur_ms": 20.269,
      "end_ms": 344.5725,
      "text": "1",
      "token_texts": [
        "1"
      ],
      "accepted_count": 1
    },
    {
      "idx": 17,
      "t_ms": 344.5725,
      "dur_ms": 20.269,
      "end_ms": 364.8415,
      "text": ": ",
      "token_texts": [
        ": "
      ],
      "accepted_count": 1
    },
    {
      "idx": 18,
      "t_ms": 364.8415,
      "dur_ms": 20.269,
      "end_ms": 385.1104,
      "text": "Determine ",
      "token_texts": [
        "Determine "
      ],
      "accepted_count": 1
    },
    {
      "idx": 19,
      "t_ms": 385.1104,
      "dur_ms": 20.269,
      "end_ms": 405.3794,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 20,
      "t_ms": 405.3794,
      "dur_ms": 20.269,
      "end_ms": 425.6484,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 21,
      "t_ms": 425.6484,
      "dur_ms": 20.269,
      "end_ms": 445.9174,
      "text": "w",
      "token_texts": [
        "w"
      ],
      "accepted_count": 1
    },
    {
      "idx": 22,
      "t_ms": 445.9174,
      "dur_ms": 20.269,
      "end_ms": 466.1863,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 23,
      "t_ms": 466.1863,
      "dur_ms": 20.269,
      "end_ms": 486.4553,
      "text": "m",
      "token_texts": [
        "m"
      ],
      "accepted_count": 1
    },
    {
      "idx": 24,
      "t_ms": 486.4553,
      "dur_ms": 20.269,
      "end_ms": 506.7243,
      "text": "uch ",
      "token_texts": [
        "uch "
      ],
      "accepted_count": 1
    },
    {
      "idx": 25,
      "t_ms": 506.7243,
      "dur_ms": 20.269,
      "end_ms": 526.9932,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 26,
      "t_ms": 526.9932,
      "dur_ms": 20.269,
      "end_ms": 547.2622,
      "text": "*Carmen** ",
      "token_texts": [
        "*Carmen** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 27,
      "t_ms": 547.2622,
      "dur_ms": 20.269,
      "end_ms": 567.5312,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 28,
      "t_ms": 567.5312,
      "dur_ms": 20.269,
      "end_ms": 587.8001,
      "text": "a",
      "token_texts": [
        "a"
      ],
      "accepted_count": 1
    },
    {
      "idx": 29,
      "t_ms": 587.8001,
      "dur_ms": 20.269,
      "end_ms": 608.0691,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 30,
      "t_ms": 608.0691,
      "dur_ms": 20.269,
      "end_ms": 628.3381,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 31,
      "t_ms": 628.3381,
      "dur_ms": 20.269,
      "end_ms": 648.6071,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 32,
      "t_ms": 648.6071,
      "dur_ms": 20.269,
      "end_ms": 668.876,
      "text": "\nCarmen ",
      "token_texts": [
        "\nCarmen "
      ],
      "accepted_count": 1
    },
    {
      "idx": 33,
      "t_ms": 668.876,
      "dur_ms": 20.269,
      "end_ms": 689.145,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 34,
      "t_ms": 689.145,
      "dur_ms": 20.269,
      "end_ms": 709.414,
      "text": "a",
      "token_texts": [
        "a"
      ],
      "accepted_count": 1
    },
    {
      "idx": 35,
      "t_ms": 709.414,
      "dur_ms": 20.269,
      "end_ms": 729.6829,
      "text": "s: ",
      "token_texts": [
        "s: "
      ],
      "accepted_count": 1
    },
    {
      "idx": 36,
      "t_ms": 729.6829,
      "dur_ms": 20.269,
      "end_ms": 749.9519,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 37,
      "t_ms": 749.9519,
      "dur_ms": 20.269,
      "end_ms": 770.2209,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 38,
      "t_ms": 770.2209,
      "dur_ms": 20.269,
      "end_ms": 790.4898,
      "text": "$$\n",
      "token_texts": [
        "$$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 39,
      "t_ms": 790.4898,
      "dur_ms": 20.269,
      "end_ms": 810.7588,
      "text": "\\$100\n",
      "token_texts": [
        "\\$100\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 40,
      "t_ms": 810.7588,
      "dur_ms": 20.269,
      "end_ms": 831.0278,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 41,
      "t_ms": 831.0278,
      "dur_ms": 20.269,
      "end_ms": 851.2968,
      "text": "$\n",
      "token_texts": [
        "$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 42,
      "t_ms": 851.2968,
      "dur_ms": 20.269,
      "end_ms": 871.5657,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 43,
      "t_ms": 871.5657,
      "dur_ms": 20.269,
      "end_ms": 891.8347,
      "text": "---\n",
      "token_texts": [
        "---\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 44,
      "t_ms": 891.8347,
      "dur_ms": 20.269,
      "end_ms": 912.1037,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 45,
      "t_ms": 912.1037,
      "dur_ms": 20.269,
      "end_ms": 932.3726,
      "text": "### ",
      "token_texts": [
        "### "
      ],
      "accepted_count": 1
    },
    {
      "idx": 46,
      "t_ms": 932.3726,
      "dur_ms": 20.269,
      "end_ms": 952.6416,
      "text": "Step ",
      "token_texts": [
        "Step "
      ],
      "accepted_count": 1
    },
    {
      "idx": 47,
      "t_ms": 952.6416,
      "dur_ms": 20.269,
      "end_ms": 972.9106,
      "text": "2",
      "token_texts": [
        "2"
      ],
      "accepted_count": 1
    },
    {
      "idx": 48,
      "t_ms": 972.9106,
      "dur_ms": 20.269,
      "end_ms": 993.1796,
      "text": ": ",
      "token_texts": [
        ": "
      ],
      "accepted_count": 1
    },
    {
      "idx": 49,
      "t_ms": 993.1796,
      "dur_ms": 20.269,
      "end_ms": 1013.4485,
      "text": "Determine ",
      "token_texts": [
        "Determine "
      ],
      "accepted_count": 1
    },
    {
      "idx": 50,
      "t_ms": 1013.4485,
      "dur_ms": 20.269,
      "end_ms": 1033.7175,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 51,
      "t_ms": 1033.7175,
      "dur_ms": 20.269,
      "end_ms": 1053.9865,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 52,
      "t_ms": 1053.9865,
      "dur_ms": 20.269,
      "end_ms": 1074.2554,
      "text": "w",
      "token_texts": [
        "w"
      ],
      "accepted_count": 1
    },
    {
      "idx": 53,
      "t_ms": 1074.2554,
      "dur_ms": 20.269,
      "end_ms": 1094.5244,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 54,
      "t_ms": 1094.5244,
      "dur_ms": 20.269,
      "end_ms": 1114.7934,
      "text": "m",
      "token_texts": [
        "m"
      ],
      "accepted_count": 1
    },
    {
      "idx": 55,
      "t_ms": 1114.7934,
      "dur_ms": 20.269,
      "end_ms": 1135.0623,
      "text": "uch ",
      "token_texts": [
        "uch "
      ],
      "accepted_count": 1
    },
    {
      "idx": 56,
      "t_ms": 1135.0623,
      "dur_ms": 20.269,
      "end_ms": 1155.3313,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 57,
      "t_ms": 1155.3313,
      "dur_ms": 20.269,
      "end_ms": 1175.6003,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 58,
      "t_ms": 1175.6003,
      "dur_ms": 20.269,
      "end_ms": 1195.8693,
      "text": "Samantha** ",
      "token_texts": [
        "Samantha** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 59,
      "t_ms": 1195.8693,
      "dur_ms": 20.269,
      "end_ms": 1216.1382,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 60,
      "t_ms": 1216.1382,
      "dur_ms": 20.269,
      "end_ms": 1236.4072,
      "text": "a",
      "token_texts": [
        "a"
      ],
      "accepted_count": 1
    },
    {
      "idx": 61,
      "t_ms": 1236.4072,
      "dur_ms": 20.269,
      "end_ms": 1256.6762,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 62,
      "t_ms": 1256.6762,
      "dur_ms": 20.269,
      "end_ms": 1276.9451,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 63,
      "t_ms": 1276.9451,
      "dur_ms": 20.269,
      "end_ms": 1297.2141,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 64,
      "t_ms": 1297.2141,
      "dur_ms": 20.269,
      "end_ms": 1317.4831,
      "text": "\nSamantha ",
      "token_texts": [
        "\nSamantha "
      ],
      "accepted_count": 1
    },
    {
      "idx": 65,
      "t_ms": 1317.4831,
      "dur_ms": 20.269,
      "end_ms": 1337.7521,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 66,
      "t_ms": 1337.7521,
      "dur_ms": 20.269,
      "end_ms": 1358.021,
      "text": "a",
      "token_texts": [
        "a"
      ],
      "accepted_count": 1
    },
    {
      "idx": 67,
      "t_ms": 1358.021,
      "dur_ms": 20.269,
      "end_ms": 1378.29,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 68,
      "t_ms": 1378.29,
      "dur_ms": 20.269,
      "end_ms": 1398.559,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 69,
      "t_ms": 1398.559,
      "dur_ms": 20.269,
      "end_ms": 1418.8279,
      "text": "**\\$25 ",
      "token_texts": [
        "**\\$25 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 70,
      "t_ms": 1418.8279,
      "dur_ms": 20.269,
      "end_ms": 1439.0969,
      "text": "m",
      "token_texts": [
        "m"
      ],
      "accepted_count": 1
    },
    {
      "idx": 71,
      "t_ms": 1439.0969,
      "dur_ms": 20.269,
      "end_ms": 1459.3659,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 72,
      "t_ms": 1459.3659,
      "dur_ms": 20.269,
      "end_ms": 1479.6348,
      "text": "re** ",
      "token_texts": [
        "re** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 73,
      "t_ms": 1479.6348,
      "dur_ms": 20.269,
      "end_ms": 1499.9038,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 74,
      "t_ms": 1499.9038,
      "dur_ms": 20.269,
      "end_ms": 1520.1728,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 75,
      "t_ms": 1520.1728,
      "dur_ms": 20.269,
      "end_ms": 1540.4418,
      "text": "an ",
      "token_texts": [
        "an "
      ],
      "accepted_count": 1
    },
    {
      "idx": 76,
      "t_ms": 1540.4418,
      "dur_ms": 20.269,
      "end_ms": 1560.7107,
      "text": "C",
      "token_texts": [
        "C"
      ],
      "accepted_count": 1
    },
    {
      "idx": 77,
      "t_ms": 1560.7107,
      "dur_ms": 20.269,
      "end_ms": 1580.9797,
      "text": "armen: ",
      "token_texts": [
        "armen: "
      ],
      "accepted_count": 1
    },
    {
      "idx": 78,
      "t_ms": 1580.9797,
      "dur_ms": 20.269,
      "end_ms": 1601.2487,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 79,
      "t_ms": 1601.2487,
      "dur_ms": 20.269,
      "end_ms": 1621.5176,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 80,
      "t_ms": 1621.5176,
      "dur_ms": 20.269,
      "end_ms": 1641.7866,
      "text": "$$\n",
      "token_texts": [
        "$$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 81,
      "t_ms": 1641.7866,
      "dur_ms": 20.269,
      "end_ms": 1662.0556,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 82,
      "t_ms": 1662.0556,
      "dur_ms": 20.269,
      "end_ms": 1682.3245,
      "text": "$100 ",
      "token_texts": [
        "$100 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 83,
      "t_ms": 1682.3245,
      "dur_ms": 20.269,
      "end_ms": 1702.5935,
      "text": "+",
      "token_texts": [
        "+"
      ],
      "accepted_count": 1
    },
    {
      "idx": 84,
      "t_ms": 1702.5935,
      "dur_ms": 20.269,
      "end_ms": 1722.8625,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 85,
      "t_ms": 1722.8625,
      "dur_ms": 20.269,
      "end_ms": 1743.1315,
      "text": "\\$25 ",
      "token_texts": [
        "\\$25 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 86,
      "t_ms": 1743.1315,
      "dur_ms": 20.269,
      "end_ms": 1763.4004,
      "text": "=",
      "token_texts": [
        "="
      ],
      "accepted_count": 1
    },
    {
      "idx": 87,
      "t_ms": 1763.4004,
      "dur_ms": 20.269,
      "end_ms": 1783.6694,
      "text": " \\$125\n",
      "token_texts": [
        " \\$125\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 88,
      "t_ms": 1783.6694,
      "dur_ms": 20.269,
      "end_ms": 1803.9384,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 89,
      "t_ms": 1803.9384,
      "dur_ms": 20.269,
      "end_ms": 1824.2073,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 90,
      "t_ms": 1824.2073,
      "dur_ms": 20.269,
      "end_ms": 1844.4763,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 91,
      "t_ms": 1844.4763,
      "dur_ms": 20.269,
      "end_ms": 1864.7453,
      "text": "\n---\n",
      "token_texts": [
        "\n---\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 92,
      "t_ms": 1864.7453,
      "dur_ms": 20.269,
      "end_ms": 1885.0143,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 93,
      "t_ms": 1885.0143,
      "dur_ms": 20.269,
      "end_ms": 1905.2832,
      "text": "### ",
      "token_texts": [
        "### "
      ],
      "accepted_count": 1
    },
    {
      "idx": 94,
      "t_ms": 1905.2832,
      "dur_ms": 20.269,
      "end_ms": 1925.5522,
      "text": "S",
      "token_texts": [
        "S"
      ],
      "accepted_count": 1
    },
    {
      "idx": 95,
      "t_ms": 1925.5522,
      "dur_ms": 20.269,
      "end_ms": 1945.8212,
      "text": "tep ",
      "token_texts": [
        "tep "
      ],
      "accepted_count": 1
    },
    {
      "idx": 96,
      "t_ms": 1945.8212,
      "dur_ms": 20.269,
      "end_ms": 1966.0901,
      "text": "3",
      "token_texts": [
        "3"
      ],
      "accepted_count": 1
    },
    {
      "idx": 97,
      "t_ms": 1966.0901,
      "dur_ms": 20.269,
      "end_ms": 1986.3591,
      "text": ": ",
      "token_texts": [
        ": "
      ],
      "accepted_count": 1
    },
    {
      "idx": 98,
      "t_ms": 1986.3591,
      "dur_ms": 20.269,
      "end_ms": 2006.6281,
      "text": "Determine ",
      "token_texts": [
        "Determine "
      ],
      "accepted_count": 1
    },
    {
      "idx": 99,
      "t_ms": 2006.6281,
      "dur_ms": 20.269,
      "end_ms": 2026.897,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 100,
      "t_ms": 2026.897,
      "dur_ms": 20.269,
      "end_ms": 2047.166,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 101,
      "t_ms": 2047.166,
      "dur_ms": 20.269,
      "end_ms": 2067.435,
      "text": "w",
      "token_texts": [
        "w"
      ],
      "accepted_count": 1
    },
    {
      "idx": 102,
      "t_ms": 2067.435,
      "dur_ms": 20.269,
      "end_ms": 2087.704,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 103,
      "t_ms": 2087.704,
      "dur_ms": 20.269,
      "end_ms": 2107.9729,
      "text": "much ",
      "token_texts": [
        "much "
      ],
      "accepted_count": 1
    },
    {
      "idx": 104,
      "t_ms": 2107.9729,
      "dur_ms": 20.269,
      "end_ms": 2128.2419,
      "text": "*",
      "token_texts": [
        "*"
      ],
      "accepted_count": 1
    },
    {
      "idx": 105,
      "t_ms": 2128.2419,
      "dur_ms": 20.269,
      "end_ms": 2148.5109,
      "text": "*Daisy** ",
      "token_texts": [
        "*Daisy** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 106,
      "t_ms": 2148.5109,
      "dur_ms": 20.269,
      "end_ms": 2168.7798,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 107,
      "t_ms": 2168.7798,
      "dur_ms": 20.269,
      "end_ms": 2189.0488,
      "text": "a",
      "token_texts": [
        "a"
      ],
      "accepted_count": 1
    },
    {
      "idx": 108,
      "t_ms": 2189.0488,
      "dur_ms": 20.269,
      "end_ms": 2209.3178,
      "text": "s",
      "token_texts": [
        "s"
      ],
      "accepted_count": 1
    },
    {
      "idx": 109,
      "t_ms": 2209.3178,
      "dur_ms": 20.269,
      "end_ms": 2229.5868,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 110,
      "t_ms": 2229.5868,
      "dur_ms": 20.269,
      "end_ms": 2249.8557,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 111,
      "t_ms": 2249.8557,
      "dur_ms": 20.269,
      "end_ms": 2270.1247,
      "text": "\nDaisy ",
      "token_texts": [
        "\nDaisy "
      ],
      "accepted_count": 1
    },
    {
      "idx": 112,
      "t_ms": 2270.1247,
      "dur_ms": 20.269,
      "end_ms": 2290.3937,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 113,
      "t_ms": 2290.3937,
      "dur_ms": 20.269,
      "end_ms": 2310.6626,
      "text": "a",
      "token_texts": [
        "a"
      ],
      "accepted_count": 1
    },
    {
      "idx": 114,
      "t_ms": 2310.6626,
      "dur_ms": 20.269,
      "end_ms": 2330.9316,
      "text": "s ",
      "token_texts": [
        "s "
      ],
      "accepted_count": 1
    },
    {
      "idx": 115,
      "t_ms": 2330.9316,
      "dur_ms": 20.269,
      "end_ms": 2351.2006,
      "text": "**\\$50 ",
      "token_texts": [
        "**\\$50 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 116,
      "t_ms": 2351.2006,
      "dur_ms": 20.269,
      "end_ms": 2371.4695,
      "text": "m",
      "token_texts": [
        "m"
      ],
      "accepted_count": 1
    },
    {
      "idx": 117,
      "t_ms": 2371.4695,
      "dur_ms": 20.269,
      "end_ms": 2391.7385,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 118,
      "t_ms": 2391.7385,
      "dur_ms": 20.269,
      "end_ms": 2412.0075,
      "text": "re** ",
      "token_texts": [
        "re** "
      ],
      "accepted_count": 1
    },
    {
      "idx": 119,
      "t_ms": 2412.0075,
      "dur_ms": 20.269,
      "end_ms": 2432.2765,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 120,
      "t_ms": 2432.2765,
      "dur_ms": 20.269,
      "end_ms": 2452.5454,
      "text": "h",
      "token_texts": [
        "h"
      ],
      "accepted_count": 1
    },
    {
      "idx": 121,
      "t_ms": 2452.5454,
      "dur_ms": 20.269,
      "end_ms": 2472.8144,
      "text": "an ",
      "token_texts": [
        "an "
      ],
      "accepted_count": 1
    },
    {
      "idx": 122,
      "t_ms": 2472.8144,
      "dur_ms": 20.269,
      "end_ms": 2493.0834,
      "text": "S",
      "token_texts": [
        "S"
      ],
      "accepted_count": 1
    },
    {
      "idx": 123,
      "t_ms": 2493.0834,
      "dur_ms": 20.269,
      "end_ms": 2513.3523,
      "text": "amantha: ",
      "token_texts": [
        "amantha: "
      ],
      "accepted_count": 1
    },
    {
      "idx": 124,
      "t_ms": 2513.3523,
      "dur_ms": 20.269,
      "end_ms": 2533.6213,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 125,
      "t_ms": 2533.6213,
      "dur_ms": 20.269,
      "end_ms": 2553.8903,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 126,
      "t_ms": 2553.8903,
      "dur_ms": 20.269,
      "end_ms": 2574.1592,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 127,
      "t_ms": 2574.1592,
      "dur_ms": 20.269,
      "end_ms": 2594.4282,
      "text": "$\n",
      "token_texts": [
        "$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 128,
      "t_ms": 2594.4282,
      "dur_ms": 20.269,
      "end_ms": 2614.6972,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 129,
      "t_ms": 2614.6972,
      "dur_ms": 20.269,
      "end_ms": 2634.9662,
      "text": "$125 ",
      "token_texts": [
        "$125 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 130,
      "t_ms": 2634.9662,
      "dur_ms": 20.269,
      "end_ms": 2655.2351,
      "text": "+",
      "token_texts": [
        "+"
      ],
      "accepted_count": 1
    },
    {
      "idx": 131,
      "t_ms": 2655.2351,
      "dur_ms": 20.269,
      "end_ms": 2675.5041,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 132,
      "t_ms": 2675.5041,
      "dur_ms": 20.269,
      "end_ms": 2695.7731,
      "text": "\\$50 ",
      "token_texts": [
        "\\$50 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 133,
      "t_ms": 2695.7731,
      "dur_ms": 20.269,
      "end_ms": 2716.042,
      "text": "=",
      "token_texts": [
        "="
      ],
      "accepted_count": 1
    },
    {
      "idx": 134,
      "t_ms": 2716.042,
      "dur_ms": 20.269,
      "end_ms": 2736.311,
      "text": " \\$175\n",
      "token_texts": [
        " \\$175\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 135,
      "t_ms": 2736.311,
      "dur_ms": 20.269,
      "end_ms": 2756.58,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 136,
      "t_ms": 2756.58,
      "dur_ms": 20.269,
      "end_ms": 2776.849,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 137,
      "t_ms": 2776.849,
      "dur_ms": 20.269,
      "end_ms": 2797.1179,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 138,
      "t_ms": 2797.1179,
      "dur_ms": 20.269,
      "end_ms": 2817.3869,
      "text": "\n---\n",
      "token_texts": [
        "\n---\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 139,
      "t_ms": 2817.3869,
      "dur_ms": 20.269,
      "end_ms": 2837.6559,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 140,
      "t_ms": 2837.6559,
      "dur_ms": 20.269,
      "end_ms": 2857.9248,
      "text": "### ",
      "token_texts": [
        "### "
      ],
      "accepted_count": 1
    },
    {
      "idx": 141,
      "t_ms": 2857.9248,
      "dur_ms": 20.269,
      "end_ms": 2878.1938,
      "text": "S",
      "token_texts": [
        "S"
      ],
      "accepted_count": 1
    },
    {
      "idx": 142,
      "t_ms": 2878.1938,
      "dur_ms": 20.269,
      "end_ms": 2898.4628,
      "text": "tep ",
      "token_texts": [
        "tep "
      ],
      "accepted_count": 1
    },
    {
      "idx": 143,
      "t_ms": 2898.4628,
      "dur_ms": 20.269,
      "end_ms": 2918.7317,
      "text": "4",
      "token_texts": [
        "4"
      ],
      "accepted_count": 1
    },
    {
      "idx": 144,
      "t_ms": 2918.7317,
      "dur_ms": 20.269,
      "end_ms": 2939.0007,
      "text": ": ",
      "token_texts": [
        ": "
      ],
      "accepted_count": 1
    },
    {
      "idx": 145,
      "t_ms": 2939.0007,
      "dur_ms": 20.269,
      "end_ms": 2959.2697,
      "text": "Add ",
      "token_texts": [
        "Add "
      ],
      "accepted_count": 1
    },
    {
      "idx": 146,
      "t_ms": 2959.2697,
      "dur_ms": 20.269,
      "end_ms": 2979.5387,
      "text": "up ",
      "token_texts": [
        "up "
      ],
      "accepted_count": 1
    },
    {
      "idx": 147,
      "t_ms": 2979.5387,
      "dur_ms": 20.269,
      "end_ms": 2999.8076,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 148,
      "t_ms": 2999.8076,
      "dur_ms": 20.269,
      "end_ms": 3020.0766,
      "text": "he ",
      "token_texts": [
        "he "
      ],
      "accepted_count": 1
    },
    {
      "idx": 149,
      "t_ms": 3020.0766,
      "dur_ms": 20.269,
      "end_ms": 3040.3456,
      "text": "amounts ",
      "token_texts": [
        "amounts "
      ],
      "accepted_count": 1
    },
    {
      "idx": 150,
      "t_ms": 3040.3456,
      "dur_ms": 20.269,
      "end_ms": 3060.6145,
      "text": "o",
      "token_texts": [
        "o"
      ],
      "accepted_count": 1
    },
    {
      "idx": 151,
      "t_ms": 3060.6145,
      "dur_ms": 20.269,
      "end_ms": 3080.8835,
      "text": "f",
      "token_texts": [
        "f"
      ],
      "accepted_count": 1
    },
    {
      "idx": 152,
      "t_ms": 3080.8835,
      "dur_ms": 20.269,
      "end_ms": 3101.1525,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 153,
      "t_ms": 3101.1525,
      "dur_ms": 20.269,
      "end_ms": 3121.4215,
      "text": "all ",
      "token_texts": [
        "all "
      ],
      "accepted_count": 1
    },
    {
      "idx": 154,
      "t_ms": 3121.4215,
      "dur_ms": 20.269,
      "end_ms": 3141.6904,
      "text": "t",
      "token_texts": [
        "t"
      ],
      "accepted_count": 1
    },
    {
      "idx": 155,
      "t_ms": 3141.6904,
      "dur_ms": 20.269,
      "end_ms": 3161.9594,
      "text": "hree ",
      "token_texts": [
        "hree "
      ],
      "accepted_count": 1
    },
    {
      "idx": 156,
      "t_ms": 3161.9594,
      "dur_ms": 20.269,
      "end_ms": 3182.2284,
      "text": "g",
      "token_texts": [
        "g"
      ],
      "accepted_count": 1
    },
    {
      "idx": 157,
      "t_ms": 3182.2284,
      "dur_ms": 20.269,
      "end_ms": 3202.4973,
      "text": "irls ",
      "token_texts": [
        "irls "
      ],
      "accepted_count": 1
    },
    {
      "idx": 158,
      "t_ms": 3202.4973,
      "dur_ms": 20.269,
      "end_ms": 3222.7663,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 159,
      "t_ms": 3222.7663,
      "dur_ms": 20.269,
      "end_ms": 3243.0353,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 160,
      "t_ms": 3243.0353,
      "dur_ms": 20.269,
      "end_ms": 3263.3042,
      "text": "$$\n",
      "token_texts": [
        "$$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 161,
      "t_ms": 3263.3042,
      "dur_ms": 20.269,
      "end_ms": 3283.5732,
      "text": "\\$100 ",
      "token_texts": [
        "\\$100 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 162,
      "t_ms": 3283.5732,
      "dur_ms": 20.269,
      "end_ms": 3303.8422,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 163,
      "t_ms": 3303.8422,
      "dur_ms": 20.269,
      "end_ms": 3324.1112,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 164,
      "t_ms": 3324.1112,
      "dur_ms": 20.269,
      "end_ms": 3344.3801,
      "text": "(",
      "token_texts": [
        "("
      ],
      "accepted_count": 1
    },
    {
      "idx": 165,
      "t_ms": 3344.3801,
      "dur_ms": 20.269,
      "end_ms": 3364.6491,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 166,
      "t_ms": 3364.6491,
      "dur_ms": 20.269,
      "end_ms": 3384.9181,
      "text": "te",
      "token_texts": [
        "te"
      ],
      "accepted_count": 1
    },
    {
      "idx": 167,
      "t_ms": 3384.9181,
      "dur_ms": 20.269,
      "end_ms": 3405.187,
      "text": "xt{Carmen}) ",
      "token_texts": [
        "xt{Carmen}) "
      ],
      "accepted_count": 1
    },
    {
      "idx": 168,
      "t_ms": 3405.187,
      "dur_ms": 20.269,
      "end_ms": 3425.456,
      "text": "+",
      "token_texts": [
        "+"
      ],
      "accepted_count": 1
    },
    {
      "idx": 169,
      "t_ms": 3425.456,
      "dur_ms": 20.269,
      "end_ms": 3445.725,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 170,
      "t_ms": 3445.725,
      "dur_ms": 20.269,
      "end_ms": 3465.9939,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 171,
      "t_ms": 3465.9939,
      "dur_ms": 20.269,
      "end_ms": 3486.2629,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 172,
      "t_ms": 3486.2629,
      "dur_ms": 20.269,
      "end_ms": 3506.5319,
      "text": "125 ",
      "token_texts": [
        "125 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 173,
      "t_ms": 3506.5319,
      "dur_ms": 20.269,
      "end_ms": 3526.8009,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 174,
      "t_ms": 3526.8009,
      "dur_ms": 20.269,
      "end_ms": 3547.0698,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 175,
      "t_ms": 3547.0698,
      "dur_ms": 20.269,
      "end_ms": 3567.3388,
      "text": "(\\",
      "token_texts": [
        "(\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 176,
      "t_ms": 3567.3388,
      "dur_ms": 20.269,
      "end_ms": 3587.6078,
      "text": "te",
      "token_texts": [
        "te"
      ],
      "accepted_count": 1
    },
    {
      "idx": 177,
      "t_ms": 3587.6078,
      "dur_ms": 20.269,
      "end_ms": 3607.8767,
      "text": "xt{Samantha}) ",
      "token_texts": [
        "xt{Samantha}) "
      ],
      "accepted_count": 1
    },
    {
      "idx": 178,
      "t_ms": 3607.8767,
      "dur_ms": 20.269,
      "end_ms": 3628.1457,
      "text": "+",
      "token_texts": [
        "+"
      ],
      "accepted_count": 1
    },
    {
      "idx": 179,
      "t_ms": 3628.1457,
      "dur_ms": 20.269,
      "end_ms": 3648.4147,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 180,
      "t_ms": 3648.4147,
      "dur_ms": 20.269,
      "end_ms": 3668.6837,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 181,
      "t_ms": 3668.6837,
      "dur_ms": 20.269,
      "end_ms": 3688.9526,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 182,
      "t_ms": 3688.9526,
      "dur_ms": 20.269,
      "end_ms": 3709.2216,
      "text": "175 ",
      "token_texts": [
        "175 "
      ],
      "accepted_count": 1
    },
    {
      "idx": 183,
      "t_ms": 3709.2216,
      "dur_ms": 20.269,
      "end_ms": 3729.4906,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 184,
      "t_ms": 3729.4906,
      "dur_ms": 20.269,
      "end_ms": 3749.7595,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 185,
      "t_ms": 3749.7595,
      "dur_ms": 20.269,
      "end_ms": 3770.0285,
      "text": "(",
      "token_texts": [
        "("
      ],
      "accepted_count": 1
    },
    {
      "idx": 186,
      "t_ms": 3770.0285,
      "dur_ms": 20.269,
      "end_ms": 3790.2975,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 187,
      "t_ms": 3790.2975,
      "dur_ms": 20.269,
      "end_ms": 3810.5664,
      "text": "text{Daisy}) ",
      "token_texts": [
        "text{Daisy}) "
      ],
      "accepted_count": 1
    },
    {
      "idx": 188,
      "t_ms": 3810.5664,
      "dur_ms": 20.269,
      "end_ms": 3830.8354,
      "text": "=",
      "token_texts": [
        "="
      ],
      "accepted_count": 1
    },
    {
      "idx": 189,
      "t_ms": 3830.8354,
      "dur_ms": 20.269,
      "end_ms": 3851.1044,
      "text": " ",
      "token_texts": [
        " "
      ],
      "accepted_count": 1
    },
    {
      "idx": 190,
      "t_ms": 3851.1044,
      "dur_ms": 20.269,
      "end_ms": 3871.3734,
      "text": "\\",
      "token_texts": [
        "\\"
      ],
      "accepted_count": 1
    },
    {
      "idx": 191,
      "t_ms": 3871.3734,
      "dur_ms": 20.269,
      "end_ms": 3891.6423,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 192,
      "t_ms": 3891.6423,
      "dur_ms": 20.269,
      "end_ms": 3911.9113,
      "text": "400\n",
      "token_texts": [
        "400\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 193,
      "t_ms": 3911.9113,
      "dur_ms": 20.269,
      "end_ms": 3932.1803,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 194,
      "t_ms": 3932.1803,
      "dur_ms": 20.269,
      "end_ms": 3952.4492,
      "text": "$\n",
      "token_texts": [
        "$\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 195,
      "t_ms": 3952.4492,
      "dur_ms": 20.269,
      "end_ms": 3972.7182,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 196,
      "t_ms": 3972.7182,
      "dur_ms": 20.269,
      "end_ms": 3992.9872,
      "text": "---\n",
      "token_texts": [
        "---\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 197,
      "t_ms": 3992.9872,
      "dur_ms": 20.269,
      "end_ms": 4013.2562,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 198,
      "t_ms": 4013.2562,
      "dur_ms": 20.269,
      "end_ms": 4033.5251,
      "text": "### ",
      "token_texts": [
        "### "
      ],
      "accepted_count": 1
    },
    {
      "idx": 199,
      "t_ms": 4033.5251,
      "dur_ms": 20.269,
      "end_ms": 4053.7941,
      "text": "✅",
      "token_texts": [
        "✅"
      ],
      "accepted_count": 1
    },
    {
      "idx": 200,
      "t_ms": 4053.7941,
      "dur_ms": 20.269,
      "end_ms": 4074.0631,
      "text": " Final ",
      "token_texts": [
        " Final "
      ],
      "accepted_count": 1
    },
    {
      "idx": 201,
      "t_ms": 4074.0631,
      "dur_ms": 20.269,
      "end_ms": 4094.332,
      "text": "A",
      "token_texts": [
        "A"
      ],
      "accepted_count": 1
    },
    {
      "idx": 202,
      "t_ms": 4094.332,
      "dur_ms": 20.269,
      "end_ms": 4114.601,
      "text": "n",
      "token_texts": [
        "n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 203,
      "t_ms": 4114.601,
      "dur_ms": 20.269,
      "end_ms": 4134.87,
      "text": "swer:\n",
      "token_texts": [
        "swer:\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 204,
      "t_ms": 4134.87,
      "dur_ms": 20.269,
      "end_ms": 4155.1389,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 205,
      "t_ms": 4155.1389,
      "dur_ms": 20.269,
      "end_ms": 4175.4079,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 206,
      "t_ms": 4175.4079,
      "dur_ms": 20.269,
      "end_ms": 4195.6769,
      "text": "\n",
      "token_texts": [
        "\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 207,
      "t_ms": 4195.6769,
      "dur_ms": 20.269,
      "end_ms": 4215.9459,
      "text": "\\boxed{400}\n",
      "token_texts": [
        "\\boxed{400}\n"
      ],
      "accepted_count": 1
    },
    {
      "idx": 208,
      "t_ms": 4215.9459,
      "dur_ms": 20.269,
      "end_ms": 4236.2148,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 209,
      "t_ms": 4236.2148,
      "dur_ms": 20.269,
      "end_ms": 4256.4838,
      "text": "$",
      "token_texts": [
        "$"
      ],
      "accepted_count": 1
    },
    {
      "idx": 210,
      "t_ms": 4256.4838,
      "dur_ms": 20.269,
      "end_ms": 4276.7528,
      "text": "",
      "token_texts": [
        ""
      ],
      "accepted_count": 1
    },
    {
      "idx": 211,
      "t_ms": 4276.7528,
      "dur_ms": 20.269,
      "end_ms": 4297.0217,
      "text": "",
      "token_texts": [
        ""
      ],
      "accepted_count": 1
    },
    {
      "idx": 212,
      "t_ms": 4297.0217,
      "dur_ms": 20.269,
      "end_ms": 4317.2907,
      "text": "",
      "token_texts": [
        ""
      ],
      "accepted_count": 1
    }
  ],
  "totals": {
    "tokens": 213,
    "wall_ms": 4317.297,
    "tps": 49.336
  }
});
