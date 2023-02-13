docker buildと実行
```
docker build -t ts-sample
```

```
docker run --rm ts-sample node {Directory-Name}/index.ts
```


Ex) decorators/index.tsの実行
```
docker run --rm ts-sample node decorators/index.ts
```
