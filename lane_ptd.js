window.PTD_DEMO_LANES = window.PTD_DEMO_LANES || [];
window.PTD_DEMO_LANES.push({
  "schema": "ptd-demo-trace/v0",
  "lane": {
    "method": "PTD",
    "engine": "jetflow",
    "model": "Qwen/Qwen3-8B",
    "device": "NVIDIA B200",
    "dataset": "GSM8K",
    "recorded": "2026-06-22",
    "timing_source": "measured",
    "run_config": {
      "note": "MEASURED: per-method throughput (tok/s), token count, accepted-length and answer text are measured on NVIDIA B200 (GSM8K, Qwen3-8B). Token-level pacing within each lane is reconstructed from the measured throughput (aggregate speed is recorded, not per-token wall-clock); relative lane speeds are preserved. Export decode_time_s=0.9225s (inconsistent with tps for spec lanes; race timed by tps).",
      "target_tps": 301.704,
      "measured_tps": 301.704,
      "samples": 16,
      "world_size": 1,
      "accept_len_mean": 8.09,
      "rounds": 35
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
      "dur_ms": 26.5161,
      "end_ms": 26.5161,
      "text": "Let's solve this step by ",
      "token_texts": [
        "Let's ",
        "s",
        "olve ",
        "t",
        "his ",
        "s",
        "tep ",
        "by "
      ],
      "accepted_count": 8
    },
    {
      "idx": 1,
      "t_ms": 26.5161,
      "dur_ms": 26.5161,
      "end_ms": 53.0322,
      "text": "step.\n\n---\n\n### Step 1",
      "token_texts": [
        "s",
        "tep.\n",
        "\n",
        "---\n",
        "\n",
        "### ",
        "Step ",
        "1"
      ],
      "accepted_count": 8
    },
    {
      "idx": 2,
      "t_ms": 53.0322,
      "dur_ms": 26.5161,
      "end_ms": 79.5482,
      "text": ": Determine how much ",
      "token_texts": [
        ": ",
        "Determine ",
        "h",
        "o",
        "w",
        " ",
        "m",
        "uch "
      ],
      "accepted_count": 8
    },
    {
      "idx": 3,
      "t_ms": 79.5482,
      "dur_ms": 26.5161,
      "end_ms": 106.0643,
      "text": "**Carmen** has  \nWe ",
      "token_texts": [
        "**Carmen** ",
        "h",
        "a",
        "s",
        " ",
        " ",
        "\n",
        "We "
      ],
      "accepted_count": 8
    },
    {
      "idx": 4,
      "t_ms": 106.0643,
      "dur_ms": 26.5161,
      "end_ms": 132.5804,
      "text": "are told:\n\n> Carmen has ",
      "token_texts": [
        "are ",
        "told:\n",
        "\n",
        ">",
        " ",
        "Carmen ",
        "h",
        "as "
      ],
      "accepted_count": 8
    },
    {
      "idx": 5,
      "t_ms": 132.5804,
      "dur_ms": 26.5161,
      "end_ms": 159.0965,
      "text": "$100\n\nSo,  \n**Carmen = ",
      "token_texts": [
        "$",
        "100\n",
        "\n",
        "So, ",
        " ",
        "\n**Carmen ",
        "=",
        " "
      ],
      "accepted_count": 8
    },
    {
      "idx": 6,
      "t_ms": 159.0965,
      "dur_ms": 26.5161,
      "end_ms": 185.6125,
      "text": "$100**\n\n---\n\n### Step ",
      "token_texts": [
        "$",
        "100**\n",
        "\n",
        "-",
        "--\n",
        "\n",
        "### ",
        "Step "
      ],
      "accepted_count": 8
    },
    {
      "idx": 7,
      "t_ms": 185.6125,
      "dur_ms": 26.5161,
      "end_ms": 212.1286,
      "text": "2: Determine how m",
      "token_texts": [
        "2",
        ": ",
        "Determine ",
        "h",
        "o",
        "w",
        " ",
        "m"
      ],
      "accepted_count": 8
    },
    {
      "idx": 8,
      "t_ms": 212.1286,
      "dur_ms": 26.5161,
      "end_ms": 238.6447,
      "text": "uch **Samantha** has  ",
      "token_texts": [
        "uch ",
        "*",
        "*Samantha** ",
        "h",
        "a",
        "s",
        " ",
        " "
      ],
      "accepted_count": 8
    },
    {
      "idx": 9,
      "t_ms": 238.6447,
      "dur_ms": 26.5161,
      "end_ms": 265.1608,
      "text": "\nWe are told:\n\n> Samantha h",
      "token_texts": [
        "\nWe ",
        "a",
        "re ",
        "told:\n",
        "\n",
        ">",
        " Samantha ",
        "h"
      ],
      "accepted_count": 8
    },
    {
      "idx": 10,
      "t_ms": 265.1608,
      "dur_ms": 26.5161,
      "end_ms": 291.6768,
      "text": "as $25 more than C",
      "token_texts": [
        "a",
        "s",
        " ",
        "$25 ",
        "m",
        "ore ",
        "than ",
        "C"
      ],
      "accepted_count": 8
    },
    {
      "idx": 11,
      "t_ms": 291.6768,
      "dur_ms": 23.2016,
      "end_ms": 314.8784,
      "text": "armen\n\nSo,  \n**Samantha ",
      "token_texts": [
        "armen\n",
        "\n",
        "S",
        "o, ",
        " ",
        "\n",
        "**Samantha "
      ],
      "accepted_count": 7
    },
    {
      "idx": 12,
      "t_ms": 314.8784,
      "dur_ms": 23.2016,
      "end_ms": 338.08,
      "text": "= Carmen + $",
      "token_texts": [
        "=",
        " ",
        "C",
        "armen ",
        "+",
        " ",
        "$"
      ],
      "accepted_count": 7
    },
    {
      "idx": 13,
      "t_ms": 338.08,
      "dur_ms": 23.2016,
      "end_ms": 361.2815,
      "text": "25 = $100 + $25 = ",
      "token_texts": [
        "25 ",
        "= ",
        "$100 ",
        "+",
        " $25 ",
        "=",
        " "
      ],
      "accepted_count": 7
    },
    {
      "idx": 14,
      "t_ms": 361.2815,
      "dur_ms": 23.2016,
      "end_ms": 384.4831,
      "text": "$125**\n\n---\n\n### Step ",
      "token_texts": [
        "$125**\n",
        "\n",
        "-",
        "--\n",
        "\n### ",
        "S",
        "tep "
      ],
      "accepted_count": 7
    },
    {
      "idx": 15,
      "t_ms": 384.4831,
      "dur_ms": 23.2016,
      "end_ms": 407.6847,
      "text": "3: Determine how ",
      "token_texts": [
        "3",
        ": ",
        "Determine ",
        "h",
        "o",
        "w",
        " "
      ],
      "accepted_count": 7
    },
    {
      "idx": 16,
      "t_ms": 407.6847,
      "dur_ms": 23.2016,
      "end_ms": 430.8862,
      "text": "much **Daisy** has ",
      "token_texts": [
        "much ",
        "*",
        "*Daisy** ",
        "h",
        "a",
        "s",
        " "
      ],
      "accepted_count": 7
    },
    {
      "idx": 17,
      "t_ms": 430.8862,
      "dur_ms": 23.2016,
      "end_ms": 454.0878,
      "text": " \nWe are told:\n\n> ",
      "token_texts": [
        " \n",
        "We ",
        "are ",
        "told:\n",
        "\n",
        ">",
        " "
      ],
      "accepted_count": 7
    },
    {
      "idx": 18,
      "t_ms": 454.0878,
      "dur_ms": 23.2016,
      "end_ms": 477.2894,
      "text": "Daisy has $50 more t",
      "token_texts": [
        "Daisy ",
        "h",
        "as ",
        "$50 ",
        "m",
        "ore ",
        "t"
      ],
      "accepted_count": 7
    },
    {
      "idx": 19,
      "t_ms": 477.2894,
      "dur_ms": 23.2016,
      "end_ms": 500.4909,
      "text": "han Samantha\n\nSo,  ",
      "token_texts": [
        "han ",
        "S",
        "amantha\n",
        "\n",
        "S",
        "o, ",
        " "
      ],
      "accepted_count": 7
    },
    {
      "idx": 20,
      "t_ms": 500.4909,
      "dur_ms": 23.2016,
      "end_ms": 523.6925,
      "text": "\n**Daisy = Samantha + ",
      "token_texts": [
        "\n",
        "**Daisy ",
        "=",
        " ",
        "Samantha ",
        "+",
        " "
      ],
      "accepted_count": 7
    },
    {
      "idx": 21,
      "t_ms": 523.6925,
      "dur_ms": 23.2016,
      "end_ms": 546.8941,
      "text": "$50 = $125 + $50 ",
      "token_texts": [
        "$",
        "50 ",
        "=",
        " $125 ",
        "+",
        " ",
        "$50 "
      ],
      "accepted_count": 7
    },
    {
      "idx": 22,
      "t_ms": 546.8941,
      "dur_ms": 23.2016,
      "end_ms": 570.0956,
      "text": "= $175**\n\n---\n\n### ",
      "token_texts": [
        "=",
        " $175**\n",
        "\n",
        "-",
        "--\n",
        "\n",
        "### "
      ],
      "accepted_count": 7
    },
    {
      "idx": 23,
      "t_ms": 570.0956,
      "dur_ms": 23.2016,
      "end_ms": 593.2972,
      "text": "Step 4: Add up the ",
      "token_texts": [
        "S",
        "tep ",
        "4: ",
        "A",
        "dd ",
        "up ",
        "the "
      ],
      "accepted_count": 7
    },
    {
      "idx": 24,
      "t_ms": 593.2972,
      "dur_ms": 23.2016,
      "end_ms": 616.4988,
      "text": "amounts to find the ",
      "token_texts": [
        "a",
        "mounts ",
        "t",
        "o",
        " ",
        "find ",
        "the "
      ],
      "accepted_count": 7
    },
    {
      "idx": 25,
      "t_ms": 616.4988,
      "dur_ms": 23.2016,
      "end_ms": 639.7003,
      "text": "**total**  \nNow, w",
      "token_texts": [
        "*",
        "*total** ",
        " ",
        "\n",
        "N",
        "ow, ",
        "w"
      ],
      "accepted_count": 7
    },
    {
      "idx": 26,
      "t_ms": 639.7003,
      "dur_ms": 23.2016,
      "end_ms": 662.9019,
      "text": "e add the amounts th",
      "token_texts": [
        "e ",
        "add ",
        "t",
        "he ",
        "amounts ",
        "t",
        "h"
      ],
      "accepted_count": 7
    },
    {
      "idx": 27,
      "t_ms": 662.9019,
      "dur_ms": 23.2016,
      "end_ms": 686.1035,
      "text": "at Carmen, Samantha, a",
      "token_texts": [
        "at ",
        "C",
        "armen, ",
        "S",
        "a",
        "mantha, ",
        "a"
      ],
      "accepted_count": 7
    },
    {
      "idx": 28,
      "t_ms": 686.1035,
      "dur_ms": 23.2016,
      "end_ms": 709.305,
      "text": "nd Daisy have:\n\n",
      "token_texts": [
        "n",
        "d",
        " ",
        "Daisy ",
        "h",
        "ave:\n",
        "\n"
      ],
      "accepted_count": 7
    },
    {
      "idx": 29,
      "t_ms": 709.305,
      "dur_ms": 23.2016,
      "end_ms": 732.5066,
      "text": "$$\n\\text{Total} = \\",
      "token_texts": [
        "$",
        "$\n",
        "\\",
        "text{Total} ",
        "=",
        " ",
        "\\"
      ],
      "accepted_count": 7
    },
    {
      "idx": 30,
      "t_ms": 732.5066,
      "dur_ms": 23.2016,
      "end_ms": 755.7082,
      "text": "text{Carmen} + \\t",
      "token_texts": [
        "t",
        "e",
        "xt{Carmen} ",
        "+",
        " ",
        "\\",
        "t"
      ],
      "accepted_count": 7
    },
    {
      "idx": 31,
      "t_ms": 755.7082,
      "dur_ms": 23.2016,
      "end_ms": 778.9097,
      "text": "ext{Samantha} + \\te",
      "token_texts": [
        "e",
        "xt{Samantha} ",
        "+",
        " ",
        "\\",
        "t",
        "e"
      ],
      "accepted_count": 7
    },
    {
      "idx": 32,
      "t_ms": 778.9097,
      "dur_ms": 23.2016,
      "end_ms": 802.1113,
      "text": "xt{Daisy} = 100 + ",
      "token_texts": [
        "xt{Daisy} ",
        "=",
        " ",
        "1",
        "0",
        "0 ",
        "+ "
      ],
      "accepted_count": 7
    },
    {
      "idx": 33,
      "t_ms": 802.1113,
      "dur_ms": 23.2016,
      "end_ms": 825.3129,
      "text": "125 + 175\n$$\n\n$$\n\\",
      "token_texts": [
        "125 ",
        "+ ",
        "175\n",
        "$",
        "$\n",
        "\n$$\n",
        "\\"
      ],
      "accepted_count": 7
    },
    {
      "idx": 34,
      "t_ms": 825.3129,
      "dur_ms": 23.2016,
      "end_ms": 848.5144,
      "text": "text{Total} = 400\n",
      "token_texts": [
        "text{Total} ",
        "=",
        " ",
        "4",
        "0",
        "0\n",
        ""
      ],
      "accepted_count": 7
    }
  ],
  "totals": {
    "tokens": 256,
    "wall_ms": 848.5155,
    "tps": 301.704,
    "accept_len_mean": 8.09
  }
});
