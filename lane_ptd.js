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
      "note": "MEASURED: per-method throughput (tok/s), token count, accepted-length and answer text are measured on NVIDIA B200 (GSM8K, Qwen3-8B). Token-level pacing within each lane is reconstructed from the measured throughput (aggregate speed is recorded, not per-token wall-clock); relative lane speeds are preserved. Export decode_time_s=0.9111s (inconsistent with tps for spec lanes; race timed by tps).",
      "target_tps": 314.335,
      "measured_tps": 314.335,
      "samples": 16,
      "world_size": 1,
      "accept_len_mean": 8.5745,
      "rounds": 33
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
      "dur_ms": 25.4506,
      "end_ms": 25.4506,
      "text": "We are given the following in",
      "token_texts": [
        "We are ",
        "g",
        "iven ",
        "the ",
        "f",
        "ollowing ",
        "i",
        "n"
      ],
      "accepted_count": 8
    },
    {
      "idx": 1,
      "t_ms": 25.4506,
      "dur_ms": 25.4506,
      "end_ms": 50.9012,
      "text": "formation:\n\n- Deepa has ",
      "token_texts": [
        "f",
        "ormation:\n",
        "\n",
        "-",
        " ",
        "Deepa ",
        "h",
        "as "
      ],
      "accepted_count": 8
    },
    {
      "idx": 2,
      "t_ms": 50.9012,
      "dur_ms": 25.4506,
      "end_ms": 76.3518,
      "text": "seen **9** Fast and the ",
      "token_texts": [
        "seen ",
        "*",
        "*9** ",
        "F",
        "ast ",
        "and ",
        "t",
        "he "
      ],
      "accepted_count": 8
    },
    {
      "idx": 3,
      "t_ms": 76.3518,
      "dur_ms": 25.4506,
      "end_ms": 101.8023,
      "text": "Furious movies.\n- She has ",
      "token_texts": [
        "Furious ",
        "m",
        "ovies.\n",
        "-",
        " ",
        "S",
        "he ",
        "has "
      ],
      "accepted_count": 8
    },
    {
      "idx": 4,
      "t_ms": 101.8023,
      "dur_ms": 25.4506,
      "end_ms": 127.2529,
      "text": "seen **each one** **three t",
      "token_texts": [
        "seen ",
        "*",
        "*each ",
        "o",
        "ne** ",
        "*",
        "*three ",
        "t"
      ],
      "accepted_count": 8
    },
    {
      "idx": 5,
      "t_ms": 127.2529,
      "dur_ms": 25.4506,
      "end_ms": 152.7035,
      "text": "imes**.\n- She spent a ",
      "token_texts": [
        "imes**.\n",
        "-",
        " ",
        "S",
        "he ",
        "spent ",
        "a",
        " "
      ],
      "accepted_count": 8
    },
    {
      "idx": 6,
      "t_ms": 152.7035,
      "dur_ms": 25.4506,
      "end_ms": 178.1541,
      "text": "total of **$216** on tickets.\n-",
      "token_texts": [
        "total ",
        "of ",
        "**$216** ",
        "o",
        "n",
        " ",
        "tickets.\n",
        "-"
      ],
      "accepted_count": 8
    },
    {
      "idx": 7,
      "t_ms": 178.1541,
      "dur_ms": 25.4506,
      "end_ms": 203.6047,
      "text": " We are asked to find ",
      "token_texts": [
        " ",
        "W",
        "e ",
        "are ",
        "asked ",
        "t",
        "o ",
        "find "
      ],
      "accepted_count": 8
    },
    {
      "idx": 8,
      "t_ms": 203.6047,
      "dur_ms": 25.4506,
      "end_ms": 229.0553,
      "text": "the **average price per ",
      "token_texts": [
        "the ",
        "*",
        "*average ",
        "p",
        "r",
        "ice ",
        "p",
        "er "
      ],
      "accepted_count": 8
    },
    {
      "idx": 9,
      "t_ms": 229.0553,
      "dur_ms": 22.2693,
      "end_ms": 251.3245,
      "text": "ticket**.\n\n---\n\n### Step ",
      "token_texts": [
        "ticket**.\n",
        "\n",
        "-",
        "-",
        "-\n",
        "\n### ",
        "Step "
      ],
      "accepted_count": 7
    },
    {
      "idx": 10,
      "t_ms": 251.3245,
      "dur_ms": 22.2693,
      "end_ms": 273.5938,
      "text": "1: Find the total n",
      "token_texts": [
        "1",
        ": ",
        "Find ",
        "t",
        "he ",
        "total ",
        "n"
      ],
      "accepted_count": 7
    },
    {
      "idx": 11,
      "t_ms": 273.5938,
      "dur_ms": 22.2693,
      "end_ms": 295.8631,
      "text": "umber of tickets she b",
      "token_texts": [
        "umber ",
        "o",
        "f ",
        "tickets ",
        "s",
        "he ",
        "b"
      ],
      "accepted_count": 7
    },
    {
      "idx": 12,
      "t_ms": 295.8631,
      "dur_ms": 22.2693,
      "end_ms": 318.1323,
      "text": "ought\n\nShe saw **9 movies**, ",
      "token_texts": [
        "ought\n",
        "\n",
        "She ",
        "saw ",
        "*",
        "*9 ",
        "movies**, "
      ],
      "accepted_count": 7
    },
    {
      "idx": 13,
      "t_ms": 318.1323,
      "dur_ms": 22.2693,
      "end_ms": 340.4016,
      "text": "and each was seen ",
      "token_texts": [
        "a",
        "n",
        "d ",
        "each ",
        "w",
        "as ",
        "seen "
      ],
      "accepted_count": 7
    },
    {
      "idx": 14,
      "t_ms": 340.4016,
      "dur_ms": 22.2693,
      "end_ms": 362.6709,
      "text": "**3 times**:\n\n$$\n\\",
      "token_texts": [
        "*",
        "*3 ",
        "times**:\n",
        "\n",
        "$",
        "$\n",
        "\\"
      ],
      "accepted_count": 7
    },
    {
      "idx": 15,
      "t_ms": 362.6709,
      "dur_ms": 22.2693,
      "end_ms": 384.9401,
      "text": "text{Total tickets} = 9",
      "token_texts": [
        "text{Total ",
        "t",
        "i",
        "ckets} ",
        "=",
        " ",
        "9"
      ],
      "accepted_count": 7
    },
    {
      "idx": 16,
      "t_ms": 384.9401,
      "dur_ms": 22.2693,
      "end_ms": 407.2094,
      "text": " \\times 3 = 27\n$$\n\n---\n",
      "token_texts": [
        " \\times ",
        "3",
        " ",
        "= ",
        "27\n",
        "$$\n",
        "\n---\n"
      ],
      "accepted_count": 7
    },
    {
      "idx": 17,
      "t_ms": 407.2094,
      "dur_ms": 22.2693,
      "end_ms": 429.4787,
      "text": "\n### Step 2: Find the ",
      "token_texts": [
        "\n",
        "### ",
        "Step ",
        "2: ",
        "Find ",
        "t",
        "he "
      ],
      "accepted_count": 7
    },
    {
      "idx": 18,
      "t_ms": 429.4787,
      "dur_ms": 22.2693,
      "end_ms": 451.7479,
      "text": "average price per ticket\n",
      "token_texts": [
        "average ",
        "p",
        "r",
        "ice ",
        "p",
        "er ",
        "ticket\n"
      ],
      "accepted_count": 7
    },
    {
      "idx": 19,
      "t_ms": 451.7479,
      "dur_ms": 22.2693,
      "end_ms": 474.0172,
      "text": "\nShe spent **$216** o",
      "token_texts": [
        "\n",
        "She ",
        "s",
        "pent ",
        "*",
        "*$216** ",
        "o"
      ],
      "accepted_count": 7
    },
    {
      "idx": 20,
      "t_ms": 474.0172,
      "dur_ms": 22.2693,
      "end_ms": 496.2865,
      "text": "n **27 tickets**. To ",
      "token_texts": [
        "n",
        " **27 ",
        "t",
        "ickets**. ",
        "T",
        "o",
        " "
      ],
      "accepted_count": 7
    },
    {
      "idx": 21,
      "t_ms": 496.2865,
      "dur_ms": 22.2693,
      "end_ms": 518.5557,
      "text": "find the average price ",
      "token_texts": [
        "find ",
        "t",
        "he ",
        "average ",
        "p",
        "r",
        "ice "
      ],
      "accepted_count": 7
    },
    {
      "idx": 22,
      "t_ms": 518.5557,
      "dur_ms": 22.2693,
      "end_ms": 540.825,
      "text": "per ticket:\n\n$$\n\\t",
      "token_texts": [
        "p",
        "er ",
        "ticket:\n",
        "\n",
        "$",
        "$\n",
        "\\t"
      ],
      "accepted_count": 7
    },
    {
      "idx": 23,
      "t_ms": 540.825,
      "dur_ms": 22.2693,
      "end_ms": 563.0942,
      "text": "ext{Average price per ticket} ",
      "token_texts": [
        "ext{Average ",
        "p",
        "r",
        "ice ",
        "p",
        "er ",
        "ticket} "
      ],
      "accepted_count": 7
    },
    {
      "idx": 24,
      "t_ms": 563.0942,
      "dur_ms": 22.2693,
      "end_ms": 585.3635,
      "text": "= \\frac{\\text{Total c",
      "token_texts": [
        "=",
        " ",
        "\\",
        "f",
        "rac",
        "{\\text{Total ",
        "c"
      ],
      "accepted_count": 7
    },
    {
      "idx": 25,
      "t_ms": 585.3635,
      "dur_ms": 22.2693,
      "end_ms": 607.6328,
      "text": "ost}}{\\text{Number of",
      "token_texts": [
        "o",
        "s",
        "t",
        "}}",
        "{\\text{Number ",
        "o",
        "f"
      ],
      "accepted_count": 7
    },
    {
      "idx": 26,
      "t_ms": 607.6328,
      "dur_ms": 22.2693,
      "end_ms": 629.902,
      "text": " tickets}} = \\fr",
      "token_texts": [
        " ",
        "t",
        "ickets}} ",
        "=",
        " ",
        "\\",
        "fr"
      ],
      "accepted_count": 7
    },
    {
      "idx": 27,
      "t_ms": 629.902,
      "dur_ms": 22.2693,
      "end_ms": 652.1713,
      "text": "ac{216}{27}\n$$\n\n$$\n\\fr",
      "token_texts": [
        "ac{216}{27}\n",
        "$",
        "$",
        "\n",
        "\n",
        "$$\n",
        "\\fr"
      ],
      "accepted_count": 7
    },
    {
      "idx": 28,
      "t_ms": 652.1713,
      "dur_ms": 22.2693,
      "end_ms": 674.4406,
      "text": "ac{216}{27} = 8\n$$\n\n---\n",
      "token_texts": [
        "ac{216}{27} ",
        "=",
        " ",
        "8",
        "\n$$\n",
        "\n",
        "---\n"
      ],
      "accepted_count": 7
    },
    {
      "idx": 29,
      "t_ms": 674.4406,
      "dur_ms": 22.2693,
      "end_ms": 696.7098,
      "text": "\n### ✅ Final Answer:\n\n$",
      "token_texts": [
        "\n### ",
        "✅",
        " Final ",
        "A",
        "nswer:\n",
        "\n",
        "$"
      ],
      "accepted_count": 7
    },
    {
      "idx": 30,
      "t_ms": 696.7098,
      "dur_ms": 22.2693,
      "end_ms": 718.9791,
      "text": "$\n\\boxed{8}\n$$\n\nSo, t",
      "token_texts": [
        "$\n",
        "\\boxed{8}\n",
        "$",
        "$",
        "\n",
        "\nSo, ",
        "t"
      ],
      "accepted_count": 7
    },
    {
      "idx": 31,
      "t_ms": 718.9791,
      "dur_ms": 22.2693,
      "end_ms": 741.2484,
      "text": "he **average price per ",
      "token_texts": [
        "he ",
        "**average ",
        "p",
        "r",
        "ice ",
        "p",
        "er "
      ],
      "accepted_count": 7
    },
    {
      "idx": 32,
      "t_ms": 741.2484,
      "dur_ms": 22.2693,
      "end_ms": 763.5176,
      "text": "ticket** is **$8**.",
      "token_texts": [
        "ticket** ",
        "i",
        "s",
        " ",
        "*",
        "*$8",
        "**."
      ],
      "accepted_count": 7
    }
  ],
  "totals": {
    "tokens": 240,
    "wall_ms": 763.5186,
    "tps": 314.335,
    "accept_len_mean": 8.5745
  }
});
