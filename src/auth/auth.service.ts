import { ConflictException, Injectable } from '@nestjs/common';
import { SignUpRequestDto } from './dto/request/sign-up-request.dto';
import { SignUpResponseDto } from './dto/response/sign-up-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';

/**
 * Prisma는 쿼리 옵션을 하나의 객체로 받도록 설계되어 있다.
 * 단순히 조건 하나만 받는 게 아니라, 조건/선택 필드/관계 데이터 포함 여부 등
 * 다양한 옵션을 함께 표현해야 하기 때문이다.
 *
 * [예시]
 * this.prismaService.member.findUnique({
 *   where:   { email: 'user@example.com' },  // 조건 (WHERE)
 *   select:  { id: true, name: true },        // 가져올 필드 지정 (SELECT)
 *   include: { crewMembers: true },           // 관계 데이터 포함 (JOIN)
 * });
 *
 * where 자체도 객체인 이유는, 조건이 여러 개일 수 있기 때문이다.
 * where: { email: 'user@example.com', name: 'John' }
 * → WHERE email = ? AND name = ?
 */

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signUp(request: SignUpRequestDto): Promise<SignUpResponseDto> {
    const inputEmail = request.email;

    const foundMember = await this.prismaService.member.findUnique({
      where: { email: inputEmail },
    });

    if (foundMember) {
      // 이미 해당 이메일로 가입한 사용자가 존재한다면
      throw new ConflictException('MEMBER_ALREADY_EXISTS');
    }

    
  }
}
