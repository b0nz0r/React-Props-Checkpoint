// players List 
const players = [
    {
      name: "MESSI",
      team: "Inter Miami CF",
      nationality: "Argentina",
      jerseyNumber: 10,
      age: 36,
      image: "data:image/png;base64,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",
      imageUrl: "https://cdn.futbin.com/content/fifa24/img/players/158023.png?v=23",
    },
    {
      name: "RONALDINHO",
      team: "ICON",
      nationality: "Brazil",
      jerseyNumber: 10,
      age: 43,
      image: "data:image/png;base64,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",
      imageUrl: "https://cdn.futbin.com/content/fifa24/img/players/28130.png?v=23",
    },
    {
        name: "PELE",
        team: "ICON",
        nationality: "Brazil",
        jerseyNumber: 10,
        age: 'Died at 82',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAC2CAMAAAAIowPyAAABJlBMVEUAmzr+3wAAJ3b/////4gAAlzwAmTv/5AAAJXX/5gAAInQAIHMAIHj/6AAAJXcAGnEAEW8AFXkAFnAAAHwAAGtpsC0AHXgADno2ozUACG3K0BUjnzfX1BD43gClwiDl2AxUqzCDuCjBzBixxh10sytEpjOy2bycvyPv3AWOuybt0xGpmEupmkbHtinlzBvz2Q3SvyhYXGGNhkyvoz0YMXBNVGXbxyDBsTQlOmuelUY8Rmp3dVReYV6mqMO6qzc6TImPy6A0p1SFj7Lj8ujR6tlpuX13clpErGElN32JhVXp7PJmalgRK3J/e1JETWhHWJNeaJpseaPHvnKWoMTIyt/z323u6Md5wo4AlB7q2nX17bzc3u2yuNCg0KxWtHLYyl7u7NiVlY0lRiE6AAAMEklEQVR4nO1dDXvSShZOmSSEhCaQRjDWXj+qaHtrW2utrUqBkEqMKGHhLrsXyu7+/z+xMxOotGTywWeAeR+1rYjJvJw57zlnzkwYhoKCgoKCgoKCgoKCgoKCgoKCgoKCYsXBc8u+g6WD5w+e7G44Ddzrpyy794Ljl30jywPP/MFuQbBPX2+sMXDPn2EOEN7wG2kMPLOf3LoD++z55hkDz796y26Ngt1nNswYuMdPklsPwL59tUnGwHMHe+xDDhANL3c3xhi4x0+9KEAs7B1shlryzJuxmfAbyY1Qy1Fd9DSG9VdLbnfflwJMw5qrJffobSAHiIb99TUGbndcFwks7D1aT2PguReeukig4SWzhjTAfDGkGQyN4cW6zQmef7MV3gwGNDx5vFbGEKSLBBbYNVJLmC9OQAGm4dmahE489zBfjETDH+uQW3K7LyenALHwduXVMpouEmhYcbVEdVTf8SUHYP3+2UpXYnn+gDg2Nrmd3Ds8vf5w9OefR0fX745PtrZTRCqSK6uWZF1Mpk5Oj358VnZ28lmMPPzu8v3Zp+NkyvstLHuwig4S6iKRgQ9fz3PZnCQkRiGns1n549lFKunJwwqqJU/KF1Psp6/ZfE6+T8AQQjqbv7w63PamYcXUEuqiZ6KQPLk6z6e9CRhCzGZ/XHhaA1LLlaGBpIupkzMhK/sy4NpDbufrqadzSL5clXVL7rVn2SCZvKqHoQAjl/1xmPI0hpVQS55746l026ef82EpwNYgXXkaA7sCi9jca09dZLe+76TDU4Ag5z8fexoDG/NCw3CZ+SFSx5/z0ShASGc/eLEQ87I8URevcxHNwIWQ/+JdiomvWnIMIV/cvgrtEB8i+/GEEDrFsixPzhdTX3b8IwM/5M6PvUuTyRjmltzjJ6RE4dsE7uA30nUCC2gRO1ZzAuWLpDXWH1NxgFi4IJSp45Vb+pQNtn9mp+MAsnDu7RdiVZbneW9dREhd7UzLAfQLv0j/fVxavnjuObmOmvyUn9wn/kb26zaRhmQM1JKUL7qf02GUSNkHO1eeUZN7kWWrJdRF33L6r4lipHEI2VOfNTx2f5ldPtwuSRcxts+mdopDSJd7Phdaolr66KJ7a6czcQgusj/JE2ILqeVyjIF7HLC+yM5qMiDACRHQ5bOEQgMpXxz5cD5MGSXdR/pXwMr+4nNL7lHgMvNefTbKMET+OrC/YaGL2Dzjo4sDpK6yCUGQRUlSVDWDoaqKIonihI5CvAy8Jvt2YWrJc69CrC+eKLquJKxSw2karSJGy2g6jZKVkDJ6RlUkQtl9GlNYWIO0V1uyx938o9Xu2jYA1SoAZqEA/ywUCib8Gdh2t100mqV6RlOjMCEFeQXXGBagllAXQy0znwBQLsOBVzq1AuiXbysA1Aq3BWAy+O8xum3Dqau6IoZkIfsuVP/f3CuxQcvMd/gL3NwW+sAsV+GYb6qgbILKDfxaYEzGJaFza2Imek1Ly0hDJyooZBJy33xjhTsW5ruI7ZcvPsA/AQ9AH1T5cqWKSOhXqx005vJN/+YWfVPtF/BXUDWBXXTqGRUbhG5oRBJk8STcxdmn8ys0RGi/grPhpmDWQPUGGgPo1CplUK30+x3QMf8FJwVEod/HX8Ftv4JMo21Y0EWU2qBIdhP5D6G7AOekltzufvhGxH8je4cGANxfA+AfqlX8F+Wy6b5QKQBoLH04X7qGpRdtRyKaQvpr6DuYT24Zrf3qbzg6LAKG45RK1gAlVzB7XaQahbI7HaDr7ECLMbFhtA3NIpMg10POB0zDzNUyfFuyi2LTknRNy6DwCMZHMoYIIycYOmV0TVfrTquHFBSYmIoyU4YOtAp5sYuWJpEmRD6UPgxZ2JvpIjbPv/DNF8cuf6wpKDD0iQ5lSdU1oWH0bGwOXLVQQzMDy2fb0VTvN2bPIn0Us1zEjtqWvJW8xrmT5PjMbwRBUnTNakIiTADFw7wB1RoKqqB3EDNeb0h/JNfZPD+NWVVikS5G7MJLfUfVFNGx7aY/CwiioouNVhd5zUq1cwvKnds+dCitTGbcGoRsNBJmpZaTtCWn3uNKgtrtkkX/vkVkNMvoQlOADgLZAnQSpm3o45Ni5zDqvcxALSdrS97GWbQA9SAUB65BqBmriBxErXoDgwsYUwG7mXkYP0byjANM2fJFbL8Kuqy72AAz6fAkwH8uZjSnDdWSMQFUzRtoD11Huz+fsuHDpdH7maIsP2lbMns48YqLqkNzgBlGp1DpoxACdEv6PRLOQqUPY3c0acvX5G3J7OmkhTXFUkU9YUAaYLKBgkoYThb1kTmR+xLVMw7vaSK1JG9jDb7guwlJEBugqSRkVW/aAIZOfRh4QzpsR7ubVmmftaiAm9qLXGhA7VcTXg1e79OkllA3SiiXFBQN0QAzcZhq9MugJ6lDEt5PSgKqxEYzBv75s0kc0PBq1z4k+JYYBXVQYIE0GLaJ0stCzawA0NTdt0WNlu6DfRMPEpRSPWQhKZMowoChAGMHlF30XLVcJAlzmw6SY7etkGVFWa9DwaxVmSoMG0y7gQKvRU4HZm6OMdMtemYFnhA1xzZrUCv7t50CMDRxsY6RmZNECnU9OJsYgaIXUaJt8mYHZpcJZcESycwnWBISY5PBf3boDRt0CoU+SrjtkrbgYImZOmwOBUEMCK4VpQjKUCfMSu0WOAsPm5npEqiRgSrET1tIOEXLnwVBd1BiVanC3Ar8ZwIKpt8zM0Uq/XugzTqJBUFpAytINBUVygSMFuCvZaTSzBRFFReynJCtNpEEKJoNKxHkGGTNgAFkrQDsqAzMbAli0vIaglpqQEkklAzxNJFQWVUS/a0BTgm8qvnfiBTMsNERqmXEQutw1FKzSy6xCZYxCJzkRrEUUHtQ6l3oGP6O9mHMdrdQxJJ78nIwJEGzbZ1k6mIJJY14hAYwfBYhXT4zbQD+ivJRzLbkjmmIsviS+plDg4S/rdJdjW2cC8squfmU6DiNwJRC0FpgqYsvEHyEZbjkpx2UK6EE+G6yi9L4MGWxLmAWJIkYSMp3rwja/5a8DMdEW5Cty4phG6Mjs1ql8RGqvaBpoCSauMCGfGiYXpUB5te+FH5pPvktpzTB6NqL97SXrYCcEnlW9L56MyZL80z4Jg32XVa2MqMDlBpNr/UoISiv1ro2jD8xo/Fo0mDCt+tsfRaF+wOUFO9p7586CIkG9J5QTUuWEJd2HSZs41bq6H46LUiS92DlhH/ULIiKZUkoz4pP4xYTtoXvQS+naPQ8Z79gNXsl3ykhltptXH6NUwsfE7aZ854pqEbPs+tAtmzgv3YNU6w2KkbFq5kTIXpbr+JW1caKzXqxVfKbDwJ8sZ4IZwiLPpsqTIO3R2lFbSQefux3awoPBj94NeFk8PcxbPBmwrT6fxxr9Yeq3yMbvzDyiizioEKwuu5sEfIX8Wv1Z0Js+rgY2/Qh14Ht0Xsx/OwH/MApI1i9pgDNQMoYRay02e+x3PTBTLD9Ry41HGL9RC3auNAmNGQhkWkbqljqOpKKSUtf+prBUjfLRt4IJkvkcqNYaqACFNSLloKcAapIDXxmnDeCMYFbAiNtlxexiApysyGh4Ar+MOxNiPWWQCZgc2gq6uZQAQ1dEZF/aP6eN3HfHMrMdJuwIDTdb+CcsO/C6fhvE0bwyS1TkTaMiw3QdQvTinFXjFiJDeOM/9EB0Y5PaBmD2EkdetBVOTqAmdkhEoI6KLwIQxlJ1w9X5BAJZubHidSLBnaMuXMCB3E8ToSZ+GAZ0bPIqLVxH8OKHSyDQD5iKE3cMSw2Wt6lVuggV/CIIWbCw6bqpBdW87Apxu/YsXz0Y8cuVvLYMcbvALpf0Q6gE1f3ADrG5yjCo405ipDxPZRSDGMN63AoJUOPJ3VBD6rF8D2y+Md5Lr/+RxYjBB5eLa394dUMPcZ8AHqgPQJ9tAEGfcgFAn3cCQZ98A0GfQQSAn0YFgZ9LBoCfUAeBn1UIgZ9aCYCfXwqBn2QLgJ9pDIGObfcmIdrM76PWd8MM3Dh1SAdx2Xm+YLnH+aWC2xLjg9gbjliDBugi94YVctN0EVvDBexY9R+tQwgtVz1Our04PmD1Vhmni94SgEFBQUFBQUFBQUFBQUFBQUFBQUFxcrj/0mOsHj2YniAAAAAAElFTkSuQmCC",
        imageUrl: "https://cdn.futbin.com/content/fifa24/img/players/237067.png?v=23",
      },
      {
        name: "RONALDO",
        team: "ICON",
        nationality: "Brazil",
        jerseyNumber: 9,
        age: 47,
        image: "data:image/png;base64,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",
        imageUrl: "https://cdn.futbin.com/content/fifa24/img/players/37576.png?v=23",
      }
  ];
  
  export default players;
  