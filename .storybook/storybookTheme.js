import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#C24342',
  colorSecondary: '#26374E',

  appBg: '#EAE8E8',
  appContentBg: '#FFF',

  fontBase: '"Open Sans", sans-serif',
  fontCode: '"Menlo", monospace',

  textColor: '#262626',
  textInverseColor: '#FFF',

  brandTitle: 'Newton by Anomalous',
  brandImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxYAAAB4CAYAAABvqGQQAAAACXBIWXMAAAsSAAALEgHS3X78AAAegElEQVR4nO2dO3IbSbOFey7Hh64lk5QBW5AFgwahFTRmBYRWIMwKBK1A1AoIrmDQKxBgyIAl0oYxpEnrigtQ6EZxTkstCo9+VGZldZ8vAvFPhH41Wo3qrDz5qj++f/+eEEIIIYQQQkgT/odPjxBCCCGEENKUP/kECSGEEFKW/jAdJUkywOckSZKzJEleb9bZkg+RkG5DYUEIIYSQ3+gP02cQD6OCiHjJJ0UI2QWFBSGEENJx+sP0pJCFyD/HXX8uhJBqUFgQQgghHaI/TItlTHk2osc1QAhpCoUFIYQQ0gH6w/QiSZK3/K0JIVJwKhQhhBDSDQb8nQkhklBYEEIIIYQQQhpDYUEIIYQQQghpDIUFIYQQQgghpDHRNG9jisUzoct/3ayza6FrE0IIIYQQ0npimgo1TZLkXOri/WH6YrPObqWuTwghhBBCSJuJqRRqLnz9ifD1CSGEEEIIaS3RCIvNOlsmSXIn+BUUFoQQQgghhNQktubtheC1j/vDdCx4fUIIIYQQQlpLbMJCuhxqKnx9QgghhBBCWklUwgKTmyTLoc76w/RE8PqEEEIIIYS0khjPsZAsh0qYtSCEEEIIIaQ6MQqLC+Hrs4mbEEIIIYSQikQnLHDWxI3gV/T6w5TighBCCCGEkArEmLFIeKYFIYQQQgghtohVWHwVvj6buAkhhBBCCKlArMJCI6MwU/gOQgghhBBCWkF0wqI/TAcuo6DwVeP+MH2m8D2EEEIIIYRET4wZC61xsD0nLpS+ixBCCCGEkKiJSlggg6Dp7PNMC0IIIYQQQkoQW8ZigkyCFi9RekUIIYQQQgjZQ2zCIkQGgVkLQgghhBBCDhCNsOgP01GSJMcBvvqcTdyEEEIIIYTsJ6aMRcjMAQ/MI4QQQgghZA9RCAscVpcGvAWWQxFCCCGEELKHWDIWoTMGxyjFIoQQQgghhGwhFmFhIWPAcihCCCGEEEJ2YF5Y9Iep9ojZXZyjJIsQQgghhBDyhBgyFpYyBcxaEEIIIYQQsoU/LT8UHE53ZuBWcpywmNm4lfaC8b7ut7/drLPbrj+PshSeW7JZZ8sobrplwGY9i+X5x3a/mhT66q436+xrN/7VJOfb5+euQsF9vh6d3l/zwRCrWNv7//j+/bvVZ+Ue1tyVIBm4lSJ/bdbZws7t6IOSsNwhmde5AbwIY1xnAAN+6JySlTPySZK4F2e5WWedMfZwch6feZIkucNTRXTfOaGG53eNz22XnmEOnOlcuFY2wvj7o8K6PfQ75M8+X7dqhh/vWX6vI6yflwf+WvF+r9tm7wq//0nhnSpjf3Ly55N/rvGczAdB+sN0KRisex2LQP32+fnoyRpIatrTX9bA0el95wJhhfcpqesPhKLgkI8268xc0Ljga+Vr9aSkDS/ygPWZ5Pt+wWaJBEzMCgv84LdG+iuKZJt1NrZzO7I8Wdi5Mc5/k9VmnZWeloXfdIJPlRdjF+6FcU7PvG0RVwiJXHhJZu0ecofXPcu2ZYgKm95gy7N8X3YzwXswxW/S9KBO0XVbEO1jj2O6M9xvVCKjIKxGCu/SXeE9Mvmcuiosvn1+Pi6sAx97zy5ye+p+/2XbhMYBe1rJH9Bmiy/zSzBhs87+MHKPxbUq7f/eQWR43f8tCwu3iX8wcCvbeNHGEp0DImIbpQwJrjsTzj65bMYsZoEBo50Lr1CC2hmaixhFxoFNbxsHhQUE3kzQGfO2bpXeszvcr9nIZGFzHgcspTUZ9OiSsEBWYoJ1EMqe3uT29Oj0Pqpyuhr21IywqOHLBBMWAgHXJtwV7FbtagbLwuLWQ2RQio+bdRb1oXl1Xrwt7DUkeGHcc3rn+/733ZN7QWNyijH5bGKsn8hxZTUbVGPT28ZOYYH340LxYM4M67ay86EkKJ5i6j0ztjk/xUzQowvC4tvn53kvpCX/IReaM4tZjEKp7UkDexpEWHjyZdSFRSC7XQUnMubwASqtWZPCAov8k4Fb2cXDZp09s3lrv7OlzrrWi7eFnYYEjt8ikHF3Rnxqvd4T63xuWEDnZHieQTZEGOBRQxGxja3CAtnSWYAopzPk4yqRooD3muA9m4Qs+8E7NDG8ORdZ4T0K1tfUZmFhVFBs4yMERpAMRkFE5B9fQlxcWPgSEdvQEhYRCIptXCE4UsoHsDpu1no2oIcocyy4l+8fZA7OpJ0QODtfAhp49++77A/Ti0DfvxdnWLDBf4pgE0wQtf+3P0xDNbe5d+0ySZK3klkdJ8D7w3SBEswQjrpbC0uI8r0U1lCoe03wvf+EsIXOOSq8Q7Fs0G7tfgn4HrWSb5+fD759fr6EjYjBnjo7dvvt83N1P6cQtP2A98Zadu8Q/2r6Mr6Bb3QdmahIcL//lv0/mxMWUHNa5QdN4JkWW8AkLyu9MW9xP2aAE3ZtsOypDO/6w/S6jOMbG8jqLQ3Ynt4hcQHnwNIautQSF09EeYzvUIL3aIk1Rxrw7fPzGYJYsa0F955/cILo2+fnXActx0DQShWLGYtYHPYznsT9k8KLY02Jn1vJXEDkXEZuWF7C8W2NsC6ICivRO7c+FtscTzz3TwbX0GXh3AdJyoz3jQH3b2ilSNfAOePIUmj270lwhuwF10FLMRS0UsOisJBID2YC10wiKNnSZGH4xXkb0hGG6Iox/bmLnmaUWhKDoiLnGP03P8Dzvgx+Z7vZKobITkqXvpGf4OA6yV4RbR6zlBiJS1qE4f1FFFPCAhun70jcSlAATLiR/ojEWzfyFyEyTC03LJeoGY0V679N2h+mj85GBKIige2O6oAsA+Slb8x+lwCR/esW2tMeptCRltBVUZEYzFhIREDzUVk3AtfuYUZ2Z0GZUQyReHWnpyOG5UPEmYu3Efw2F5GIipxUqSSqTewsfSM/KWQq2laj7qarvS+cAE7awaKLoiKxJCyQDpaIeuejEKWcyi6XQw3gnMXCWR4BVqIr0YpL5efaJY4jEhU5nHpUnZeMWO8GDc6LFooKN8ZzcHR6H2z8LPEPMvltKdWrjKWMhUhvReHAKalZ6y87XCMbo5FX2bxRHtalaMWc5RwEnDFrUYtzCvSdtC366yooXh+d3k8sHphH6lM4p6KzmBAWSAFLGNQfYkKwHCphE3dUHEtv3ihdaUujdll6guKdxAdtYj3mLIn6FYyUbUv015U9vTk6vXdZiuCnlBMRQh1YagYrGQuJpu2HLScvS0Wrx9wMokLM6UG0oqslDS95+BcBKW1iLXoUZT9Bs3bsI2VzXB/FydHpPQcctBTs/10LKv6GFWEhYUi3RU+lIqo9HpgXFZJnkMw7Hq2YsiSKAJb11GNKUfaDNjjhbtz9C/ZRdILO+4GJBWGBWlyJY/h/ExHot+CZFiSRcHpQYtXZhi3Q63p9KfkBhUU9GKj6L1sxjbyv4g59FOMmfRQM1ERF59/bxEjGQsIhd2VQu7ITUlmLYzYsRoWE08OpLv9xzs2QJElCe1ifTgeqMAUq1gCF66P4++j0/qRJH4Wzof1husAJ7cxgGQd7nkSQ/BAPOK/t6ecu1BP7M9QXJz9/CInTmvelTxeC4xsnGDFK7OM1s4CG7RBGpciq8N+hMyczRm86T89NzNuss+sIHsQDDl7LeRY4Wn4c0bOTYBq4pPTpeihrTz8629ek5AkiYvqkt2TKTLB5tAIpK/ixyzL2AetpgM8J7lPUtgUVFoKOx05h4cqh+sM0ExI0LlI7LYy4JYZxGabNOvMlBEMY/axgYH5LtUO4j5CdkVjv+3DvwmzbfZFOMXrioFlghQCQu6/bfZtzYVMe46MZPJh0MXOBbEWIf/dVbk+3CQMc0DfC7/JUaLg1NT06vW+01hGgmm1ZZxMKC/NIHzvg1tik6p4Kf3RZDHrDro0Kds2riA8tLCSMx10JFTcXdLQYWfid4ka+TXTlC1w7QjjwkWES7BPaRSkDgz+fF86YmCtnMmLeDB8Ka3bbGimKNivN+vves+JGorlWLZTEPcBhXOwpkd3Kk015indda/xpV0vJtN+pDKJgrz3Fnz/a02+fn49Q+voMf7dRiXWJdfU4Jr3q+iWqSAoLdyabt/Jt2LVF3hqA/tCxr4lWwYQFlLmE8Tj44rmXsz9MH4S+n5GF/7iqsJG7TXtWGNWqFV33ZQg0S37+3qyzyr0cEBkjnAj6QebWfiPGd8E5GfOS63a+o2xBkxu8M4sSmdJFwTmeKwmMkIeHrvBbepsshAyn1nvkxjc/62AGXCtb8QBRUHl9oHei8douHKZWxqGb8Kwg00j2wYj6GNjvFhgXP2laihiyeVvqQZV1uiSbuLs6DeUBs7pfbNbZpEZ08Baq/I3cLf5C42gqHEutudVv6oiKIvj7Ws/3OKJT6VdYt5Wigs7p26wzZ4xfYf1r8ThxZrPOXB3+vIrzCed4IHhgaJEQGQsX1Hi1WWcjn6KiiOJ7FMv74wWUG2llrkchz5SAE3ddYf/g2TC2kVq3K63gAnywGez2+7rXCSIs4GxIpJJvKtSfSSr/LjatOsfMOTmN6+rhDGhs2j6cHi0R+d6Xk4TrfPRxrRJYF9lODPwFJ7T2ukX5pdZ779bCSZP+IGxUI4XJIdolgnlQQ7yvQ8lOda0cSstevGnaD1EXF3jsD9NbZDmrRoU5wpmIUwiYvXgyFKYUoTIWUqnO0o4XopJSEca0Y+M2/27qmD0Fm7bUmSM5PpweDUO/wkvujc06mypFrK1vhBe+6pZxncpGuCKZr7UAcdGGss08e+PVBpUBdkryN+/a2GYNcZ6FyFS4gGp/mLpgwD8N9h6OcO4eg1CZKmQwRlWzF+rCAg9Iytmo6iBIGpeuZC1WTctz9hDDRBQNQy/1HDSe78uOpe+lHXWvzxKOsWjWQrgcrnH2xgOS71FnhAWmQUmXQT1o783O/vWHqdsjv3io1KCw6B690L4Qgll/lf3/h8hYSDVtr2pEqygsDIPfUzRr0cTphcMkPb3kSqqsA86YdIQ96dJmiGca7GCimkg3hEoIyzxLETzjgvdTKvvXJVGuYScumpwxURU0+bt97K2nSx7z8FGzSNr9d1hLwaiS2Q8hLIKXQeVgQ5BaDMeYfEWaIR2JbBJN1dgIpVP2Go5ZpxpQIzwkM7ZJM3k/l6XnLPUMQx7Sp00b7OkjbvIa+ig+CASfmLWwiXQZ5gdXShfDQBRVYSE877+uYWcTt20sO2nSBv5O2nlSirB3bSOM6rRkYw76Xty9opfC2gjW2MSkRaQdpuzQWRU+QB/FJ0Ffp2uBmljQ6O9ypXRfIDDM9i9qZyykshVZg41GMoJxxrRlMzSmuzRA+rfViiRLf0/X3oGohAXQHJXbRnjCfHOkDx3UsqfSopfCwiaaNsC9K/+4rJjr37GWxVATFnCwpQ4+q20whMuhkkgakK1jtWZdukyhLcJCc+QoqUeMYsgM2tOo2gbOr5BGK6tkuXyXyBEia3mM/h2XxfjaH6bu0NZJ6IEpmhkLqbKgBw/z/aWmGiUsh/KCuU1bI0KgVaKi8T0RHZTnAzrphFRDWljcaZRBAWl7Kj0whNQA+2jIzG8Phy1eJknyf/1heu0avkNUzWgKC6nIvY9oq2TEtscm7lYiHRHQmNZURPpMi85MtzFY/0+IdaQDD2piX6N8t2OBmpiwNAjjJYYH/KstMv7U+BI41lIqu/EP6dLY/WF6I1jaMtWaRkHUkDbs2lmaW+HSrgEbXElMoJwgf8+f7XjnOaHHD9KBB22HbyXcM9KlMcQx4fy8c4P3m4uMD/B1XZXOQioIpiIshMugfBmMOR68BO6QsIHxRmRSDWnDri0srgV7oBJuhMQqmFY4QDnOAGu1S2NeLSAVSXUO/vTo9F5775XOWtKeGsSVQ/WHqbSobMpLlEu5pm/nP89894iJCwuk7KQess8swEJQWCTIWrAkipRFW1iwfIe0HpQCjPAZUECYwbewuIOgCFWaIh2oGUR4/kxXmGHcsHXynozz/jC98ikwNHosJKcieRMWCqc8j0N36hOvSNcqhshYSMK1T4LgglsYyejW+L+I1p1TVLQS1zz7/uj0/iSgqCAdBk3cHyN7As4euj6MmQ8/VVRY4AalDvG4EygtEm3iFnwWRB+eT1INNhsSNdzeg2ZFt0d8wUhGCol246Kug6PT+5mBfyXLnrvNTGEgim+cj/oOAqNR75h0xsJ007bSNYtYMHiEENJKIChmyPh9oJjoBK6m/fXR6f1EcaTsIVha2mHQFD2O9OBRdzbGJ9jRWkgLC8kyKO9nT2AxSJZDHTdVgqQzcGMipCRPBMU7zvrvBK6P4s3R6f3o6PSeE+eIKVBeP4pUXDjeuQP36vxFMWEBB1rqxN0bwZNOpbMWbOAmB+EEMULKgb3mmoKiU7xH2RPHuBOzYB+PWVyc1xEXkhmLKJq2t7AQXgTnbOImh2Bmi5DDuKZsTGCRCmIRW7iKgheuj+Lo9J5ZXWIeiItBhD0XOZXFhYiwwEg/yVFrYlkFlEMxa0EIIUZB6dMCTdmk/dygj2JsqI+CkFK4CpvNOhsg0xYj5zjouhRS51hIO87uiHLhrxBlKtEjQgghbQcZ3yUbszvBA86jiK3kiVUJ5Dc262yG6P/c+CF623Aju5dl2hCkSqEky6DagGvi5ujZuGEavhpsriS+oKjoBu4sgJMmoiJv6sdBvZpwvDbZCrIXrtT5NSaaxUKvbBuCd2GBdAkb6A7Dcqi4kW6u1j4ngxshMQ96Kigq2s0KfRTTJn0U8EXyKWHMIBBTuIP0CgJDchqpT87K9H9KlELRYS5H6npRBKdbkbjRFhbceIlpkOUN0VNxAwf1Gv+b2+xr9OQ90h+m37mCanMNmzdpOjoWjs9TAdq2QA0zwC0BJ3Uv0Zs8xfkXlodRTA+tP6/CAunG2OrGQjLhoXlkB23bCCmgSW3QV6HVl/aAAR7usyyKByLGhctQNFwjJ9hPz7f8MQM1xDQIMrt3YApfemJUZBwMivvOWLC3ohoUFvGyRIpdCu2NUPr7KCxIE6YKG+wd7PGCYkKXJpOeIDqn+Owqw9Yu9ZQOsNKethiMqLUsMsb7Aj3ehAVe7m2RArKbxybuzTqTHm9L4kM78yddt86NkNSi4DhK8t5NbOEvFBfoo5iVcLjUhIVGozhLqLuDUZEx2icsfDZvs7eiHszyRAjqIkXROiRPY0IZN0LSgLHgQBBX9vSaoiIunIPlRl8mSXJZ0sE6RqmUBtLCItaD1khDnMjYrLPpZp2doOn7KtCp3nt9E5/Cgg5yPc4UDR7xi/QLrTWSWFrAxDRSj9hDMmg10QgSED9gfKwbefmlRlZXJVCjYLetBmnYV6IIpkpNUMb8BqWcWvSQSd6KF2GBiKflLnbrUJTFifTIWS1h0dWNkBgHm5dUWeAVy1DjwZ1HAVtSt+Ra3J5ivUqf3iu979SFY6AD4PrBNutsjizGG8UMxs7MnK+MBcugmsHnFyfSkc5j6XIoXF86KGB1IyT2kVz/LH+KAGej+sM0P4+iSUlcqlAdoBEMMpth48G/YXECAxmMoOdiNBYWeFGlFXrb6aEJjcSFhsMsnc3ScK5YakLqIlWvvmLfj22cb4E+ik8egx9tsKeWAzUUFoFBBmOM/gtJdgZ9fGQsWMbjBwqL+NBwmFOprAWuKz196gFTLQipg5SwoNg1Cvoo3MSZfwXs00Qqa4HgoHT298b4KOTxvtr7NtMfptcaE8HKgv4Lzb6LH/gQFnSI/XBmaVGSw8DAa0zokDoYTOPAMdawkyawIbRDwDm/FTxhvSdh9xQPcGxqT6WzdD2JYHOhad8yrsfkixPFhsSV1qGiv9BIWMAISI0B7CLM/sSHRuTzJSJ43sD1NJrtKCxIEygsusVIwadIBUqP50q+UCN7qlT+985nlh3XWkZ0TpoTxbdu2IABgRGkWqBpxoKOsF86m0aMGK0oyltfmyGuIxURLPLAqTukIVLil3bWJlr24tKjPZ0r9ZneeSor1ZgatGjayI2zSubosYlt4lQPwwasCAwJdpbk1RYWKNvheDG/9Nj8FBcw9Fp1jJcYuVgb/P1LpfulqCBW0TrTgFQAgQitcZmNxEWhPEcrku4riKURxXa+zD/u+VTpaUHDvuuDucZZJbFkKXZRFBjzAOXukv7kznX0Z4OLMlshw1QxCk78MIfx0CBPM8+qHOyV/x2FZu0iQeo7CSmBKy888VUawkyzVxaKDuUlIuvTKmsB9lSrnDTHp7DQ2gfc73jeH6YrlDNt27MGGJE6anGwuld4Fjf4LReSpWkQMZKVCTszFrWEBYyo9Iv/0WjEcy48+cFteCOeBhsVmsIiwabwCcbaffdym4FCpGiEAQuagiLBOE9OgyJNuRF0Ni58RPTgmDIY5I8L5Uh1ir6LDD7HLns6KNhTbQf4yqMTGsIun+GjuU9axa2dD+7TH6Z3+ZrDuvMy8as/TKfSo4/37e91MxYak6AuLM4Z7w/ThUJ9+oTjEOPBrdP+ML0KkLbNjbVblwlKsm4R/Ql9Ej4dLeIDydGaj028OFSqMoGygK3HOSwImmg/1zTvlYA9vcH6s2BPfTqJ9C3scAx/8tGnRDbjGvu4+52+lgnQIdg/wmessF5X+/6wrrCQLoO6MXx40VxBWLh02dT4vGryKzMD9aDHBjbABNkKCgviA2kbeIlI9KyMvcUGPg6UBewSMzTthsRKWY7PbEUeCLszsleQX3lZWHeP2R2I3KQQOCwSSvTuFTuVhQXSvtL/ELNOCaIpGi/lhDXq8RAwa2ERjdNnSTe4Vpi48xYHp+UlCU8372eoA9c4UJL8Z0+XgbIWFpGwpzGNbyX/YSVwmBzy0etkLDTKoKxPk9GoqZ9SWETHDNHMLp/tkrE/iHhEqx78R3MlfzwzTDEZqMu8F6re0JxmRdrFwbHHlcbNohlUOnq0MlwGlaORUTn2ecgMkQfrtsti8IEn8RPPUKR2FDgvHzv8CG6k9hMEf7TGpJN2cdD/rXqOhcaIWfO12XAgbxS+iiN9I2OzzmZKa8MiE/YFEZ9gPWV8qJ1l1mEHWNqesiKCVOWhzLqpKixYBvUTDQGUVjlchphhrHjIkxU+8pRtIgTXVUeBY93FQ2PfKIzrnndwnyLNKDXkorSwwAmV0rXjWUQRT63NjqUlkYGMVpd+N/feMrtGRMCEMTpAHQUO9psO/euvNKbqwdeKLWtBOxAON6211HqpkrHQcByiiUwplkNRWEQIovdd2AxvuEaJAizb6DBwtK868AScqFCzpyjdjanUjAGsMFTqnywlLDDnW2Omc2wpb43N7hgjfklkYDNss7hwomLEvgoiTSQOEKOpgsDhbrO4UBUVBWIJDP3N85GCMalSmlc2Y6GhEq8idFBYDkX20mJxkVFUEGWs20EGgIRpsbgIJSryCVHvQ3x3Ba7KluEQ77yp2j95UFjgpFGNecfRNegpTixhE3fEQFz81aKIpmvUHlNUEE2MO0BveH6LDnDA2xSs+TuUqMhBRtCqYAsmusijXaucJSqTsdD4QR8iniijdd+sLYwYrO9R5KNonTD6i43aJBQGHSD3TrxiiYYueN6vIh9F6+79tZVIvNFs0BuKiiA0smtlhAWbtvfDcihSClejuFlngwjSzttwmbkTjpQloTHkAOU9Rlqng5MCeO6DSA/Rc/c8sJblMvRu5UGsmAR7W0r08r2+tl3bKyzQNHxc9+IViNZZQTmIxoLqYeQviRxEXV9EYohWiKqx9ImYAQ7Q3wHv5yNFRXicTUIG9RVslXXcPb5w92zVnhp4t1YQXVH5hXhu/4tnF2Mm7c7XXn8oY6HhyN61IArKrAWphBtXDENkVWDkgmLE2nFiEZSQvFIuL1yhRMCsY9hFkA12paavjZ7UflWwp7cG7mcvhXdLU6w9oPQpime0DQjdi806O8Hz+xiByLjBcz/xtdf/uesP0Cyc+viSA0RfWuGEUX+YPigcIHjmfpdYXzryO/lhev1hOoVwnCiNdt7GHd7HC64xEgN5OQyyuTPBDPsKp85SZBsGv88S/ktuTzWqLrZxg9OtFzHaU7xbI4V36w7P6aJNYh3Pz+3rUxzZMEaf5ZmB23vAXj+XsGk7hYWrsVKqBW9L09sUz0wa9x1VjdSt4G+pYTDdGpHa0E0Y/MIpqBfYFHMjNBIWrCsYmKXhsg5JZ07q2rG9b1G/Y6jFnsMJGnsKitUR2tb7p1pvS5OfARvnDM/g1I0U7OkDnu0yVjGxjcK7NYJQG3t6hhmeU1UfMLoeReytP/ZXPMv8M1AISifY65fY60UDJH98//5d8vqEkIZAaAzwOcHnWYXMxh02/a8wbu6/r1kfTtoKxqTnm/aoxPuSvyO5A7Bk1q6dQGicNLCnN7Clt8U106X1UhBrxWe5zzleFfYfccc2NmCv8j3+WeF/k4oZjnxtBt3rKSwIIYQQQgghjSl78jYhhBBCCCGEbCdJkv8HMf9avZA4/KwAAAAASUVORK5CYII=',
});
