import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Product} from './entities/product.entity';
import {Repository} from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {
  }

  create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.name = createProductDto.name;
    product.price = createProductDto.price;
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({id: id});
     if (!product) {
       throw new HttpException(`Product with id:  ${id} does not exist`, HttpStatus.BAD_REQUEST);
     }
     return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
