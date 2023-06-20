import { lerp } from "@antfu/utils";

// ✅ excepted: 0.3
// ❌ actual: 0.30000000000000004
document.body.innerHTML = lerp(0.2, 0.4, 0.5) + ""
