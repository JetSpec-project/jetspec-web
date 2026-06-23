window.PTD_DEMO_LANES = window.PTD_DEMO_LANES || [];
window.PTD_DEMO_LANES.push({
  "schema": "ptd-demo-trace/v0",
  "lane": {
    "method": "DFlash",
    "engine": "dflash",
    "model": "Qwen/Qwen3-8B",
    "device": "NVIDIA B200",
    "dataset": "GSM8K",
    "recorded": "2026-06-22",
    "timing_source": "measured",
    "run_config": {
      "note": "MEASURED: per-method throughput (tok/s), token count, accepted-length and answer text are measured on NVIDIA B200 (GSM8K, Qwen3-8B). Token-level pacing within each lane is reconstructed from the measured throughput (aggregate speed is recorded, not per-token wall-clock); relative lane speeds are preserved. Export decode_time_s=1.3497s (inconsistent with tps for spec lanes; race timed by tps).",
      "target_tps": 217.924,
      "measured_tps": 217.924,
      "samples": 16,
      "world_size": 1,
      "accept_len_mean": 6.149
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
      "dur_ms": 32.1214,
      "end_ms": 32.1214,
      "text": "We are given the following i",
      "token_texts": [
        "We are ",
        "g",
        "iven ",
        "the ",
        "f",
        "ollowing ",
        "i"
      ],
      "accepted_count": 7
    },
    {
      "idx": 1,
      "t_ms": 32.1214,
      "dur_ms": 32.1214,
      "end_ms": 64.2427,
      "text": "nformation:\n\n- Deepa ",
      "token_texts": [
        "n",
        "f",
        "ormation:\n",
        "\n",
        "-",
        " ",
        "Deepa "
      ],
      "accepted_count": 7
    },
    {
      "idx": 2,
      "t_ms": 64.2427,
      "dur_ms": 32.1214,
      "end_ms": 96.3641,
      "text": "has seen **9** Fast ",
      "token_texts": [
        "h",
        "as ",
        "seen ",
        "*",
        "*9** ",
        "F",
        "ast "
      ],
      "accepted_count": 7
    },
    {
      "idx": 3,
      "t_ms": 96.3641,
      "dur_ms": 32.1214,
      "end_ms": 128.4854,
      "text": "and the Furious movies.\n-",
      "token_texts": [
        "and ",
        "t",
        "he ",
        "Furious ",
        "m",
        "ovies.\n",
        "-"
      ],
      "accepted_count": 7
    },
    {
      "idx": 4,
      "t_ms": 128.4854,
      "dur_ms": 32.1214,
      "end_ms": 160.6068,
      "text": " She has seen **each ",
      "token_texts": [
        " ",
        "S",
        "he ",
        "has ",
        "seen ",
        "*",
        "*each "
      ],
      "accepted_count": 7
    },
    {
      "idx": 5,
      "t_ms": 160.6068,
      "dur_ms": 32.1214,
      "end_ms": 192.7282,
      "text": "one** **three times**.\n-",
      "token_texts": [
        "o",
        "ne** ",
        "*",
        "*three ",
        "t",
        "imes**.\n",
        "-"
      ],
      "accepted_count": 7
    },
    {
      "idx": 6,
      "t_ms": 192.7282,
      "dur_ms": 27.5326,
      "end_ms": 220.2607,
      "text": " She spent a ",
      "token_texts": [
        " ",
        "S",
        "he ",
        "spent ",
        "a",
        " "
      ],
      "accepted_count": 6
    },
    {
      "idx": 7,
      "t_ms": 220.2607,
      "dur_ms": 27.5326,
      "end_ms": 247.7933,
      "text": "total of **$216** on ",
      "token_texts": [
        "total ",
        "of ",
        "**$216** ",
        "o",
        "n",
        " "
      ],
      "accepted_count": 6
    },
    {
      "idx": 8,
      "t_ms": 247.7933,
      "dur_ms": 27.5326,
      "end_ms": 275.3259,
      "text": "tickets.\n- We are ",
      "token_texts": [
        "tickets.\n",
        "-",
        " ",
        "W",
        "e ",
        "are "
      ],
      "accepted_count": 6
    },
    {
      "idx": 9,
      "t_ms": 275.3259,
      "dur_ms": 27.5326,
      "end_ms": 302.8585,
      "text": "asked to find the *",
      "token_texts": [
        "asked ",
        "t",
        "o ",
        "find ",
        "the ",
        "*"
      ],
      "accepted_count": 6
    },
    {
      "idx": 10,
      "t_ms": 302.8585,
      "dur_ms": 27.5326,
      "end_ms": 330.3911,
      "text": "*average price per ",
      "token_texts": [
        "*average ",
        "p",
        "r",
        "ice ",
        "p",
        "er "
      ],
      "accepted_count": 6
    },
    {
      "idx": 11,
      "t_ms": 330.3911,
      "dur_ms": 27.5326,
      "end_ms": 357.9237,
      "text": "ticket**.\n\n---\n\n### ",
      "token_texts": [
        "ticket**.\n",
        "\n",
        "-",
        "-",
        "-\n",
        "\n### "
      ],
      "accepted_count": 6
    },
    {
      "idx": 12,
      "t_ms": 357.9237,
      "dur_ms": 27.5326,
      "end_ms": 385.4563,
      "text": "Step 1: Find the ",
      "token_texts": [
        "Step ",
        "1",
        ": ",
        "Find ",
        "t",
        "he "
      ],
      "accepted_count": 6
    },
    {
      "idx": 13,
      "t_ms": 385.4563,
      "dur_ms": 27.5326,
      "end_ms": 412.9889,
      "text": "total number of tickets ",
      "token_texts": [
        "total ",
        "n",
        "umber ",
        "o",
        "f ",
        "tickets "
      ],
      "accepted_count": 6
    },
    {
      "idx": 14,
      "t_ms": 412.9889,
      "dur_ms": 27.5326,
      "end_ms": 440.5215,
      "text": "she bought\n\nShe ",
      "token_texts": [
        "s",
        "he ",
        "b",
        "ought\n",
        "\n",
        "She "
      ],
      "accepted_count": 6
    },
    {
      "idx": 15,
      "t_ms": 440.5215,
      "dur_ms": 27.5326,
      "end_ms": 468.0541,
      "text": "saw **9 movies**, an",
      "token_texts": [
        "saw ",
        "*",
        "*9 ",
        "movies**, ",
        "a",
        "n"
      ],
      "accepted_count": 6
    },
    {
      "idx": 16,
      "t_ms": 468.0541,
      "dur_ms": 27.5326,
      "end_ms": 495.5867,
      "text": "d each was seen *",
      "token_texts": [
        "d ",
        "each ",
        "w",
        "as ",
        "seen ",
        "*"
      ],
      "accepted_count": 6
    },
    {
      "idx": 17,
      "t_ms": 495.5867,
      "dur_ms": 27.5326,
      "end_ms": 523.1193,
      "text": "*3 times**:\n\n$$\n\\",
      "token_texts": [
        "*3 ",
        "times**:\n",
        "\n",
        "$",
        "$\n",
        "\\"
      ],
      "accepted_count": 6
    },
    {
      "idx": 18,
      "t_ms": 523.1193,
      "dur_ms": 27.5326,
      "end_ms": 550.6519,
      "text": "text{Total tickets} = ",
      "token_texts": [
        "text{Total ",
        "t",
        "i",
        "ckets} ",
        "=",
        " "
      ],
      "accepted_count": 6
    },
    {
      "idx": 19,
      "t_ms": 550.6519,
      "dur_ms": 27.5326,
      "end_ms": 578.1845,
      "text": "9 \\times 3 = 27\n",
      "token_texts": [
        "9",
        " \\times ",
        "3",
        " ",
        "= ",
        "27\n"
      ],
      "accepted_count": 6
    },
    {
      "idx": 20,
      "t_ms": 578.1845,
      "dur_ms": 27.5326,
      "end_ms": 605.7171,
      "text": "$$\n\n---\n\n### Step 2: ",
      "token_texts": [
        "$$\n",
        "\n---\n",
        "\n",
        "### ",
        "Step ",
        "2: "
      ],
      "accepted_count": 6
    },
    {
      "idx": 21,
      "t_ms": 605.7171,
      "dur_ms": 27.5326,
      "end_ms": 633.2496,
      "text": "Find the average pr",
      "token_texts": [
        "Find ",
        "t",
        "he ",
        "average ",
        "p",
        "r"
      ],
      "accepted_count": 6
    },
    {
      "idx": 22,
      "t_ms": 633.2496,
      "dur_ms": 27.5326,
      "end_ms": 660.7822,
      "text": "ice per ticket\n\nShe ",
      "token_texts": [
        "ice ",
        "p",
        "er ",
        "ticket\n",
        "\n",
        "She "
      ],
      "accepted_count": 6
    },
    {
      "idx": 23,
      "t_ms": 660.7822,
      "dur_ms": 27.5326,
      "end_ms": 688.3148,
      "text": "spent **$216** on",
      "token_texts": [
        "s",
        "pent ",
        "*",
        "*$216** ",
        "o",
        "n"
      ],
      "accepted_count": 6
    },
    {
      "idx": 24,
      "t_ms": 688.3148,
      "dur_ms": 27.5326,
      "end_ms": 715.8474,
      "text": " **27 tickets**. To ",
      "token_texts": [
        " **27 ",
        "t",
        "ickets**. ",
        "T",
        "o",
        " "
      ],
      "accepted_count": 6
    },
    {
      "idx": 25,
      "t_ms": 715.8474,
      "dur_ms": 27.5326,
      "end_ms": 743.38,
      "text": "find the average pr",
      "token_texts": [
        "find ",
        "t",
        "he ",
        "average ",
        "p",
        "r"
      ],
      "accepted_count": 6
    },
    {
      "idx": 26,
      "t_ms": 743.38,
      "dur_ms": 27.5326,
      "end_ms": 770.9126,
      "text": "ice per ticket:\n\n$",
      "token_texts": [
        "ice ",
        "p",
        "er ",
        "ticket:\n",
        "\n",
        "$"
      ],
      "accepted_count": 6
    },
    {
      "idx": 27,
      "t_ms": 770.9126,
      "dur_ms": 27.5326,
      "end_ms": 798.4452,
      "text": "$\n\\text{Average price ",
      "token_texts": [
        "$\n",
        "\\t",
        "ext{Average ",
        "p",
        "r",
        "ice "
      ],
      "accepted_count": 6
    },
    {
      "idx": 28,
      "t_ms": 798.4452,
      "dur_ms": 27.5326,
      "end_ms": 825.9778,
      "text": "per ticket} = \\",
      "token_texts": [
        "p",
        "er ",
        "ticket} ",
        "=",
        " ",
        "\\"
      ],
      "accepted_count": 6
    },
    {
      "idx": 29,
      "t_ms": 825.9778,
      "dur_ms": 27.5326,
      "end_ms": 853.5104,
      "text": "frac{\\text{Total cos",
      "token_texts": [
        "f",
        "rac",
        "{\\text{Total ",
        "c",
        "o",
        "s"
      ],
      "accepted_count": 6
    },
    {
      "idx": 30,
      "t_ms": 853.5104,
      "dur_ms": 27.5326,
      "end_ms": 881.043,
      "text": "t}}{\\text{Number of ",
      "token_texts": [
        "t",
        "}}",
        "{\\text{Number ",
        "o",
        "f",
        " "
      ],
      "accepted_count": 6
    },
    {
      "idx": 31,
      "t_ms": 881.043,
      "dur_ms": 27.5326,
      "end_ms": 908.5756,
      "text": "tickets}} = \\fr",
      "token_texts": [
        "t",
        "ickets}} ",
        "=",
        " ",
        "\\",
        "fr"
      ],
      "accepted_count": 6
    },
    {
      "idx": 32,
      "t_ms": 908.5756,
      "dur_ms": 27.5326,
      "end_ms": 936.1082,
      "text": "ac{216}{27}\n$$\n\n$$\n",
      "token_texts": [
        "ac{216}{27}\n",
        "$",
        "$",
        "\n",
        "\n",
        "$$\n"
      ],
      "accepted_count": 6
    },
    {
      "idx": 33,
      "t_ms": 936.1082,
      "dur_ms": 27.5326,
      "end_ms": 963.6408,
      "text": "\\frac{216}{27} = 8\n$$\n",
      "token_texts": [
        "\\fr",
        "ac{216}{27} ",
        "=",
        " ",
        "8",
        "\n$$\n"
      ],
      "accepted_count": 6
    },
    {
      "idx": 34,
      "t_ms": 963.6408,
      "dur_ms": 27.5326,
      "end_ms": 991.1734,
      "text": "\n---\n\n### ✅ Final A",
      "token_texts": [
        "\n",
        "---\n",
        "\n### ",
        "✅",
        " Final ",
        "A"
      ],
      "accepted_count": 6
    },
    {
      "idx": 35,
      "t_ms": 991.1734,
      "dur_ms": 27.5326,
      "end_ms": 1018.706,
      "text": "nswer:\n\n$$\n\\boxed{8}\n$",
      "token_texts": [
        "nswer:\n",
        "\n",
        "$",
        "$\n",
        "\\boxed{8}\n",
        "$"
      ],
      "accepted_count": 6
    },
    {
      "idx": 36,
      "t_ms": 1018.706,
      "dur_ms": 27.5326,
      "end_ms": 1046.2385,
      "text": "$\n\nSo, the **average ",
      "token_texts": [
        "$",
        "\n",
        "\nSo, ",
        "t",
        "he ",
        "**average "
      ],
      "accepted_count": 6
    },
    {
      "idx": 37,
      "t_ms": 1046.2385,
      "dur_ms": 27.5326,
      "end_ms": 1073.7711,
      "text": "price per ticket** ",
      "token_texts": [
        "p",
        "r",
        "ice ",
        "p",
        "er ",
        "ticket** "
      ],
      "accepted_count": 6
    },
    {
      "idx": 38,
      "t_ms": 1073.7711,
      "dur_ms": 27.5326,
      "end_ms": 1101.3037,
      "text": "is **$8**.",
      "token_texts": [
        "i",
        "s",
        " ",
        "*",
        "*$8",
        "**."
      ],
      "accepted_count": 6
    }
  ],
  "totals": {
    "tokens": 240,
    "wall_ms": 1101.3042,
    "tps": 217.924,
    "accept_len_mean": 6.149
  }
});
