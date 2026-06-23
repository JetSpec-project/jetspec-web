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
      "note": "MEASURED: per-method throughput (tok/s), token count, accepted-length and answer text are measured on NVIDIA B200 (GSM8K, Qwen3-8B). Token-level pacing within each lane is reconstructed from the measured throughput (aggregate speed is recorded, not per-token wall-clock); relative lane speeds are preserved. Export decode_time_s=0.8962s (inconsistent with tps for spec lanes; race timed by tps).",
      "target_tps": 219.253,
      "measured_tps": 219.253,
      "samples": 16,
      "world_size": 1,
      "accept_len_mean": 5.6489
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
      "dur_ms": 27.3657,
      "end_ms": 27.3657,
      "text": "Let's solve this s",
      "token_texts": [
        "Let's ",
        "s",
        "olve ",
        "t",
        "his ",
        "s"
      ],
      "accepted_count": 6
    },
    {
      "idx": 1,
      "t_ms": 27.3657,
      "dur_ms": 27.3657,
      "end_ms": 54.7314,
      "text": "tep by step.\n\n-",
      "token_texts": [
        "tep ",
        "b",
        "y ",
        "step.\n",
        "\n",
        "-"
      ],
      "accepted_count": 6
    },
    {
      "idx": 2,
      "t_ms": 54.7314,
      "dur_ms": 27.3657,
      "end_ms": 82.0971,
      "text": "--\n\n### Step 1: ",
      "token_texts": [
        "--\n",
        "\n",
        "### ",
        "Step ",
        "1",
        ": "
      ],
      "accepted_count": 6
    },
    {
      "idx": 3,
      "t_ms": 82.0971,
      "dur_ms": 27.3657,
      "end_ms": 109.4628,
      "text": "Determine how m",
      "token_texts": [
        "Determine ",
        "h",
        "o",
        "w",
        " ",
        "m"
      ],
      "accepted_count": 6
    },
    {
      "idx": 4,
      "t_ms": 109.4628,
      "dur_ms": 27.3657,
      "end_ms": 136.8285,
      "text": "uch **Carmen** has",
      "token_texts": [
        "uch ",
        "*",
        "*Carmen** ",
        "h",
        "a",
        "s"
      ],
      "accepted_count": 6
    },
    {
      "idx": 5,
      "t_ms": 136.8285,
      "dur_ms": 27.3657,
      "end_ms": 164.1942,
      "text": "  \nCarmen has: ",
      "token_texts": [
        " ",
        " ",
        "\nCarmen ",
        "h",
        "a",
        "s: "
      ],
      "accepted_count": 6
    },
    {
      "idx": 6,
      "t_ms": 164.1942,
      "dur_ms": 27.3657,
      "end_ms": 191.5599,
      "text": " \n$$\n\\$100\n$$\n",
      "token_texts": [
        " ",
        "\n",
        "$$\n",
        "\\$100\n",
        "$",
        "$\n"
      ],
      "accepted_count": 6
    },
    {
      "idx": 7,
      "t_ms": 191.5599,
      "dur_ms": 27.3657,
      "end_ms": 218.9256,
      "text": "\n---\n\n### Step 2",
      "token_texts": [
        "\n",
        "---\n",
        "\n",
        "### ",
        "Step ",
        "2"
      ],
      "accepted_count": 6
    },
    {
      "idx": 8,
      "t_ms": 218.9256,
      "dur_ms": 27.3657,
      "end_ms": 246.2913,
      "text": ": Determine how ",
      "token_texts": [
        ": ",
        "Determine ",
        "h",
        "o",
        "w",
        " "
      ],
      "accepted_count": 6
    },
    {
      "idx": 9,
      "t_ms": 246.2913,
      "dur_ms": 27.3657,
      "end_ms": 273.657,
      "text": "much **Samantha** h",
      "token_texts": [
        "m",
        "uch ",
        "*",
        "*",
        "Samantha** ",
        "h"
      ],
      "accepted_count": 6
    },
    {
      "idx": 10,
      "t_ms": 273.657,
      "dur_ms": 27.3657,
      "end_ms": 301.0227,
      "text": "as  \nSamantha h",
      "token_texts": [
        "a",
        "s",
        " ",
        " ",
        "\nSamantha ",
        "h"
      ],
      "accepted_count": 6
    },
    {
      "idx": 11,
      "t_ms": 301.0227,
      "dur_ms": 27.3657,
      "end_ms": 328.3884,
      "text": "as **\\$25 mo",
      "token_texts": [
        "a",
        "s",
        " ",
        "**\\$25 ",
        "m",
        "o"
      ],
      "accepted_count": 6
    },
    {
      "idx": 12,
      "t_ms": 328.3884,
      "dur_ms": 27.3657,
      "end_ms": 355.7541,
      "text": "re** than Carmen: ",
      "token_texts": [
        "re** ",
        "t",
        "h",
        "an ",
        "C",
        "armen: "
      ],
      "accepted_count": 6
    },
    {
      "idx": 13,
      "t_ms": 355.7541,
      "dur_ms": 27.3657,
      "end_ms": 383.1198,
      "text": " \n$$\n\\$100 +",
      "token_texts": [
        " ",
        "\n",
        "$$\n",
        "\\",
        "$100 ",
        "+"
      ],
      "accepted_count": 6
    },
    {
      "idx": 14,
      "t_ms": 383.1198,
      "dur_ms": 27.3657,
      "end_ms": 410.4855,
      "text": " \\$25 = \\$125\n$$",
      "token_texts": [
        " ",
        "\\$25 ",
        "=",
        " \\$125\n",
        "$",
        "$"
      ],
      "accepted_count": 6
    },
    {
      "idx": 15,
      "t_ms": 410.4855,
      "dur_ms": 27.3657,
      "end_ms": 437.8512,
      "text": "\n\n---\n\n### Step ",
      "token_texts": [
        "\n",
        "\n---\n",
        "\n",
        "### ",
        "S",
        "tep "
      ],
      "accepted_count": 6
    },
    {
      "idx": 16,
      "t_ms": 437.8512,
      "dur_ms": 27.3657,
      "end_ms": 465.2169,
      "text": "3: Determine how",
      "token_texts": [
        "3",
        ": ",
        "Determine ",
        "h",
        "o",
        "w"
      ],
      "accepted_count": 6
    },
    {
      "idx": 17,
      "t_ms": 465.2169,
      "dur_ms": 27.3657,
      "end_ms": 492.5826,
      "text": " much **Daisy** ha",
      "token_texts": [
        " ",
        "much ",
        "*",
        "*Daisy** ",
        "h",
        "a"
      ],
      "accepted_count": 6
    },
    {
      "idx": 18,
      "t_ms": 492.5826,
      "dur_ms": 27.3657,
      "end_ms": 519.9483,
      "text": "s  \nDaisy ha",
      "token_texts": [
        "s",
        " ",
        " ",
        "\nDaisy ",
        "h",
        "a"
      ],
      "accepted_count": 6
    },
    {
      "idx": 19,
      "t_ms": 519.9483,
      "dur_ms": 27.3657,
      "end_ms": 547.314,
      "text": "s **\\$50 more** t",
      "token_texts": [
        "s ",
        "**\\$50 ",
        "m",
        "o",
        "re** ",
        "t"
      ],
      "accepted_count": 6
    },
    {
      "idx": 20,
      "t_ms": 547.314,
      "dur_ms": 27.3657,
      "end_ms": 574.6797,
      "text": "han Samantha:  \n",
      "token_texts": [
        "h",
        "an ",
        "S",
        "amantha: ",
        " ",
        "\n"
      ],
      "accepted_count": 6
    },
    {
      "idx": 21,
      "t_ms": 574.6797,
      "dur_ms": 27.3657,
      "end_ms": 602.0454,
      "text": "$$\n\\$125 + ",
      "token_texts": [
        "$",
        "$\n",
        "\\",
        "$125 ",
        "+",
        " "
      ],
      "accepted_count": 6
    },
    {
      "idx": 22,
      "t_ms": 602.0454,
      "dur_ms": 27.3657,
      "end_ms": 629.4111,
      "text": "\\$50 = \\$175\n$$\n",
      "token_texts": [
        "\\$50 ",
        "=",
        " \\$175\n",
        "$",
        "$",
        "\n"
      ],
      "accepted_count": 6
    },
    {
      "idx": 23,
      "t_ms": 629.4111,
      "dur_ms": 22.8048,
      "end_ms": 652.2159,
      "text": "\n---\n\n### Step ",
      "token_texts": [
        "\n---\n",
        "\n",
        "### ",
        "S",
        "tep "
      ],
      "accepted_count": 5
    },
    {
      "idx": 24,
      "t_ms": 652.2159,
      "dur_ms": 22.8048,
      "end_ms": 675.0206,
      "text": "4: Add up t",
      "token_texts": [
        "4",
        ": ",
        "Add ",
        "up ",
        "t"
      ],
      "accepted_count": 5
    },
    {
      "idx": 25,
      "t_ms": 675.0206,
      "dur_ms": 22.8048,
      "end_ms": 697.8254,
      "text": "he amounts of ",
      "token_texts": [
        "he ",
        "amounts ",
        "o",
        "f",
        " "
      ],
      "accepted_count": 5
    },
    {
      "idx": 26,
      "t_ms": 697.8254,
      "dur_ms": 22.8048,
      "end_ms": 720.6301,
      "text": "all three girls ",
      "token_texts": [
        "all ",
        "t",
        "hree ",
        "g",
        "irls "
      ],
      "accepted_count": 5
    },
    {
      "idx": 27,
      "t_ms": 720.6301,
      "dur_ms": 22.8048,
      "end_ms": 743.4349,
      "text": " \n$$\n\\$100 \\",
      "token_texts": [
        " ",
        "\n",
        "$$\n",
        "\\$100 ",
        "\\"
      ],
      "accepted_count": 5
    },
    {
      "idx": 28,
      "t_ms": 743.4349,
      "dur_ms": 22.8048,
      "end_ms": 766.2396,
      "text": " (\\text{Carmen}) ",
      "token_texts": [
        " ",
        "(",
        "\\",
        "te",
        "xt{Carmen}) "
      ],
      "accepted_count": 5
    },
    {
      "idx": 29,
      "t_ms": 766.2396,
      "dur_ms": 22.8048,
      "end_ms": 789.0444,
      "text": "+ \\$125 ",
      "token_texts": [
        "+",
        " ",
        "\\",
        "$",
        "125 "
      ],
      "accepted_count": 5
    },
    {
      "idx": 30,
      "t_ms": 789.0444,
      "dur_ms": 22.8048,
      "end_ms": 811.8491,
      "text": "\\ (\\text{Samantha}) ",
      "token_texts": [
        "\\",
        " ",
        "(\\",
        "te",
        "xt{Samantha}) "
      ],
      "accepted_count": 5
    },
    {
      "idx": 31,
      "t_ms": 811.8491,
      "dur_ms": 22.8048,
      "end_ms": 834.6539,
      "text": "+ \\$175 ",
      "token_texts": [
        "+",
        " ",
        "\\",
        "$",
        "175 "
      ],
      "accepted_count": 5
    },
    {
      "idx": 32,
      "t_ms": 834.6539,
      "dur_ms": 22.8048,
      "end_ms": 857.4587,
      "text": "\\ (\\text{Daisy}) ",
      "token_texts": [
        "\\",
        " ",
        "(",
        "\\",
        "text{Daisy}) "
      ],
      "accepted_count": 5
    },
    {
      "idx": 33,
      "t_ms": 857.4587,
      "dur_ms": 22.8048,
      "end_ms": 880.2634,
      "text": "= \\$400\n",
      "token_texts": [
        "=",
        " ",
        "\\",
        "$",
        "400\n"
      ],
      "accepted_count": 5
    },
    {
      "idx": 34,
      "t_ms": 880.2634,
      "dur_ms": 22.8048,
      "end_ms": 903.0682,
      "text": "$$\n\n---\n\n",
      "token_texts": [
        "$",
        "$\n",
        "\n",
        "---\n",
        "\n"
      ],
      "accepted_count": 5
    },
    {
      "idx": 35,
      "t_ms": 903.0682,
      "dur_ms": 22.8048,
      "end_ms": 925.8729,
      "text": "### ✅ Final An",
      "token_texts": [
        "### ",
        "✅",
        " Final ",
        "A",
        "n"
      ],
      "accepted_count": 5
    },
    {
      "idx": 36,
      "t_ms": 925.8729,
      "dur_ms": 22.8048,
      "end_ms": 948.6777,
      "text": "swer:\n$$\n\\boxed{400}\n",
      "token_texts": [
        "swer:\n",
        "$",
        "$",
        "\n",
        "\\boxed{400}\n"
      ],
      "accepted_count": 5
    },
    {
      "idx": 37,
      "t_ms": 948.6777,
      "dur_ms": 22.8048,
      "end_ms": 971.4824,
      "text": "$$",
      "token_texts": [
        "$",
        "$",
        "",
        "",
        ""
      ],
      "accepted_count": 5
    }
  ],
  "totals": {
    "tokens": 213,
    "wall_ms": 971.4831,
    "tps": 219.253,
    "accept_len_mean": 5.6489
  }
});
